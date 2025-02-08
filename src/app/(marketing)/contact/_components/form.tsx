import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";

export default function Form() {
  return (
    <div className="w-full rounded-md space-y-4 pt-10">
      <Heading as="h2" size="2xl">
        Get In Touch With Us
      </Heading>
      <form className="bg-white shadow rounded">
        <fieldset className="space-y-4">
          <label className="block space-y-1" htmlFor="">
            <strong className="block">Name:</strong>
            <input
              className="block border w-full rounded p-1.5"
              placeholder="Name"
              type="text"
            />
          </label>
          <label className="block space-y-1" htmlFor="">
            <strong className="block">Email:</strong>
            <input
              className="block border w-full rounded p-1.5"
              placeholder="Email"
              type="text"
            />
          </label>
          <label className="block space-y-1" htmlFor="">
            <strong className="block">Country:</strong>
            <input
              className="block border w-full rounded p-1.5"
              placeholder="Country"
              type="text"
            />
          </label>
          <label className="block space-y-1" htmlFor="">
            <strong className="block">Telephone:</strong>
            <input
              className="block border w-full rounded p-1.5"
              placeholder="Telephone"
              type="text"
            />
          </label>
          <label className="block space-y-1" htmlFor="">
            <strong className="block">Organization:</strong>
            <input
              className="block border w-full rounded p-1.5"
              placeholder="Organization"
              type="text"
            />
          </label>
          <label className="block space-y-1" htmlFor="">
            <strong className="block">Message:</strong>
            <textarea
              className="w-full border rounded"
              rows={8}
              placeholder="Message"
            ></textarea>
          </label>

          <Button className="w-full block " variant="primary">
            Send Message
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
