import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
interface BranchCardProps {
  imageSrc: string;
  title?: string;
  link: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ imageSrc, title, link }) => {
    const locale = useLocale(); 
  return (
    <div className="relative rounded-[40px] rounded-tr-none overflow-hidden">
    <Link  href={`/${locale}/branches/${link}`} >
      <div className="absolute top-0 right-0 h-full w-[75px] bg-[#2BA7FF] z-10 rounded-tr-none rounded-br-[40px]" />

      <div className="relative bg-[#100F0F] p-8 ">
        <div className="relative z-20">
          <Image
            src={imageSrc}
            alt="branch-image"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 translate bg-[#100F0F]/60 flex items-center justify-center rounded-[20px]  rounded-tr-none">
            <h4 className="text-[20px] text-white text-center px-4">{title}</h4>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default BranchCard;
