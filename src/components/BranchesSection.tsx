import { getTranslations } from "next-intl/server";
import BranchesClientSection from "./ClientBanches";

const BranchesSection = async () => {
  const t = await getTranslations("Branches");

  const branches = t.raw("Branches") as {
    slug: string;
    title: string;
    image: string;
  }[];

  return (
    <BranchesClientSection
      branches={branches}
      title={t("title-section")}
      showMoreText={t("show-more")}
    />
  );
};

export default BranchesSection;
