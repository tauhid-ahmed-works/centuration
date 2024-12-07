import Button from "../shared/button";
import { Input, TextArea } from "./input-filed/input-field";

export default function Form() {
  return (
    <div className="bg-white p-5 shadow-xl w-full rounded-md">
      <h3 className="text-2xl md:text-4xl font-medium py-5">
        Get In Touch With Us
      </h3>
      <form>
        <Input placeholder="Name" type="text" label="Name" />
        <Input placeholder="Email" type="text" label="Email" />
        <Input placeholder="Country" type="text" label="Country" />
        <Input
          placeholder="Telephone Number"
          type="number"
          label="Telephone Number"
        />
        <Input placeholder="Organization" type="text" label="Organization" />
        <TextArea placeholder="Message" label="Message"></TextArea>

        <Button className="w-full block " variant="primary">
          Send Message
        </Button>
      </form>
    </div>
  );
}
