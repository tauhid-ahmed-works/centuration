import Wrapper from "@/components/layout/wrapper";
import { TextBlock } from "@/components/shared/text-block";

export default function CompanyResume() {
  return (
    <div className="h-screen bg-indigo-600 grid place-items-center">
      <div className="p-10 w-full h-[500px] relative">
        <img
          className="size-full absolute inset-0 block object"
          src="//unsplash.it/id/560/1920/1080"
          alt="image"
        />
        <Wrapper className="z-10 relative rounded">
          <div className="p-10 bg-white text-red-500 w-1/2">
            <TextBlock
              tagLine="We are looking for an experienced and passionate designer to join our team."
              heading="We are looking for an experienced and passionate designer to join our team."
              paragraph="We are looking for an experienced and passionate designer to join our team."
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
