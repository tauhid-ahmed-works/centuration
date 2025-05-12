"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null as string | null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form when data changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: !formData.email
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "Please enter a valid email address"
        : "",
      message: formData.message.trim() === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    // Form is valid if all required fields have no errors
    setIsFormValid(
      newErrors.name === "" &&
        newErrors.email === "" &&
        newErrors.message === ""
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to show validation errors
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate form before submission
    validateForm();

    // Don&apos;t submit if form is invalid
    if (!isFormValid) {
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          error: null,
        });

        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          organization: "",
          message: "",
        });
        setTouched({
          name: false,
          email: false,
          message: false,
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || "Failed to submit form. Please try again.",
        });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  // Helper to determine if field should show error
  const showError = (fieldName: keyof typeof touched) =>
    touched[fieldName] && errors[fieldName as keyof typeof errors];

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-secondary-500 to-primary-500 p-6">
          <Heading as="h2" size="2xl" className="text-white">
            Get In Touch With Us
          </Heading>
          <p className="text-blue-100 mt-2">
            We&apos;d love to hear from you. Please fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {status.success && (
            <div className="flex items-center p-4 mb-4 text-sm rounded-lg bg-green-50 text-green-800">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          {status.error && (
            <div className="flex items-center p-4 mb-4 text-sm rounded-lg bg-red-50 text-red-800">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>{status.error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                className={`block w-full px-4 py-3 rounded-md border ${
                  showError("name")
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Your name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {showError("name") && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                className={`block w-full px-4 py-3 rounded-md border ${
                  showError("email")
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                placeholder="your.email@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {showError("email") && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="country"
              >
                Country
              </label>
              <input
                id="country"
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="+1 (123) 456-7890"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="organization"
              >
                Organization
              </label>
              <input
                id="organization"
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your company or organization"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                className={`block w-full px-4 py-3 rounded-md border ${
                  showError("message")
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                rows={6}
                placeholder="How can we help you?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
              {showError("message") && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </div>

          <div className="pt-4">
            <Button
              disabled={status.loading || !isFormValid}
              className={`w-full py-3 text-base font-medium ${
                !isFormValid && !status.loading
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
              size="lg"
              variant="primary"
              type="submit"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>

          <div className="text-xs text-gray-950 text-center mt-2">
            Fields marked with <span className="text-red-500">*</span> are
            required
          </div>
        </form>
      </div>
    </div>
  );
}
