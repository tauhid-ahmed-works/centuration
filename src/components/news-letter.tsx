"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "./heading";
import Link from "next/link";
import { useIntl } from "@/lib/get-intl";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setError("");
    setStatus(null);

    // Validate email
    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      setStatus(data.message);

      if (res.ok) {
        // Clear email field on successful subscription
        setEmail("");
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error("Error subscribing:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const newsLetterData = useIntl("news_letter");

  return (
    <section className="h-72 md:h-96 relative flex items-center justify-center text-center">
      <div className="h-full w-full relative">
        <Image
          fill
          alt="news-letter-bg"
          src="/assets/images/news-letter.webp"
          className="absolute size-full inset-0 object-cover object-right"
        />
      </div>
      <div className="absolute z-10 flex flex-col justify-center">
        <div className="container">
          <Heading className="text-white" size="3xl">
            <span className="block">
              {newsLetterData("title").split("\n")[0]}
            </span>
            <span className="block">
              {newsLetterData("title").split("\n")[1]}
            </span>
          </Heading>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex flex-col items-center justify-between sm:flex-row gap-4 border border-gray-500 rounded-full focus-within:border-primary-500">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                className="rounded-full h-12 px-4 w-full sm:w-96 text-white bg-transparent focus:ring-0 focus:outline-0"
                disabled={loading}
              />
              <Button
                variant="primary"
                contrast="default"
                shape="pill"
                size="lg"
                className="bg-primary-500 text-secondary-500 hidden sm:inline-flex"
                type="submit"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </div>
            <Button
              variant="primary"
              contrast="default"
              shape="pill"
              className="bg-primary-500 text-secondary-500 w-full sm:hidden"
              type="submit"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe Now"}
            </Button>

            {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}

            {status && !error && (
              <div className="text-green-400 mt-2 text-sm">{status}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
