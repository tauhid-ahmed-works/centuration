import Image from "next/image";

export function Integration() {
  return (
    <div className="fixed right-4 bottom-4">
      <div className="inline-flex group flex-col gap-3 bg-white rounded-full p-2 shadow">
        <button className="cursor-pointer flex justify-center items-center size-6 md:size-10 rounded-full border">
          <Image
            src="/assets/icons/arrow-up.svg"
            width={32}
            height={32}
            alt="whatsapp"
            className="size-1/2"
          />
        </button>
        <button className="cursor-pointer flex justify-center items-center size-6 md:size-10 rounded-full bg-[#49E670] relative">
          <Image
            src="/assets/icons/whatsapp.svg"
            width={32}
            height={32}
            alt="whatsapp"
            className="size-1/2"
          />
          <span className="absolute px-4 py-2 bg-white drop-shadow-md whitespace-nowrap rounded right-full mr-7 font-semibold after:border-[8px] after:border-r-transparent after:border-t-transparent after:border-b-transparent after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-white hidden group-hover:block">
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
}
