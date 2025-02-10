import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";
import { WirelessSystem } from "./_components/wireless-system";
import ApplicationScope from "./_components/application-scope";
import { Communication } from "./_components/communication";
import { Catalogue } from "./_components/catalogue";
import Solutions from "./_components/solutions";
import { OurClients } from "./_components/our-clients";
import Customization from "./_components/customization";

export default function TechnologyPage() {
  const technologyData = useIntl("business_technology");
  const bannerIntl = technologyData("banner");
  const wirelessCallSystemsIntl = technologyData("wireless_call_systems");
  const areasOfUseIntl = technologyData("areas_of_use");
  const communicationKit = technologyData("staff_call_kit");
  const communicationZone = technologyData("staff_wireless_call_zones");
  const innovativeSolutions = technologyData("innovative_iron_solutions");
  const customization = technologyData("customization");
  const textIntl = technologyData("text");
  const bannerData: BannerType[] = [
    {
      mediaSrc: "/assets/images/business/technology/banner/video1.mp4",
      mediaType: "video",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      duration: 50,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/technology/banner/banner-image-01.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/technology/banner/banner-image-02.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
      <WirelessSystem data={wirelessCallSystemsIntl} />
      <ApplicationScope data={areasOfUseIntl} />
      <Customization data={customization} />
      <Solutions data={innovativeSolutions} />
      <Communication
        data={{
          communicationCall: communicationKit,
          communicationZone: communicationZone,
        }}
      />
      <OurClients data={{ title: textIntl.our_clients }} />
      <Catalogue />
    </>
  );
}
