// import Link from "next/link";
// import { footerData } from "../layout/footer/data";
// import * as Icons from "@/components/icons";

// function SocialIcon() {
//   //   const Icon = Icons[icon as keyof typeof Icons];
//   return (
//     <Link
//       className="flex items-center justify-center rounded-full border size-10"
//       href="/"
//     >
//       {/* <Icon className="size-5" /> */}
//     </Link>
//   );
// }

export default function GeneralInquiries() {
  return (
    <section>
      <div className="bg-white shadow-xl pt-10 pb-5 px-5 font-medium rounded-md mt-10 lg:mt-0 whitespace-nowrap">
        <h3 className="pb-5 text-black">General Inquiries</h3>
        <span className="flex items-center gap-2">
          {/* <Icons.Phone className="size-5" /> */}
          Tel: +225 27 24 35 36 68
        </span>
        <span className="pb-10 flex items-center gap-2">
          {/* <Icons.Envelope className="size-5" /> */}
          Email:{" "}
          <a className="cursor-pointer" href="mailto:info@groupcenturions.com">
            info@groupcenturions.com
          </a>
        </span>
        <div>
          <div className="flex gap-2 justify-between">
            {/* {footerData.socialLinks.map((item) => (
            //   <SocialIcon key={item.name} icon={item.name} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
