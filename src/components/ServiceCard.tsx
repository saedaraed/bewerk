import Link from "next/link";
import { useLocale } from "next-intl";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
    link: string;

}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
      const locale = useLocale(); 

  return (
    <Link  href={`/${locale}/services/${link}`}  className="bg-[#100F0F] rounded-[40px] rounded-tr-none p-8 border border-[#100F0F] hover:border-[#2BA7FF]">
      <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">{icon}</div>
      <h4 className="text-[20px] font-medium mt-4">{title}</h4>
      <p className="text-[16px] text-white/80 mt-2">{description}</p>
    </Link>
  );
};
export default ServiceCard;
