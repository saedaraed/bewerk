import { getTranslations } from "next-intl/server";
import ClientServices from "./ClientServices";

const ServicesSection = async () => {
  const t = await getTranslations("Services");
  const services = t.raw("services") as {
    slug: string;
    title: string;
    shortDescription: string;
    icon: string;
  }[];

  const titleSection = t("title-section");

  return <ClientServices services={services} titleSection={titleSection} />;
};

export default ServicesSection;