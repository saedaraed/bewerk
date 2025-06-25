import Contact from "@/components/Contact";
import ServiceCard from "@/components/ServiceCard";
import { getTranslations } from "next-intl/server";


const Services = async () => {
    const t = await getTranslations("Services");
    const services = t.raw("services") as {slug:string; title: string; shortDescription: string; icon:string; }[];

  return (
    <section>
      <div
        className="absolute top-0 w-full z-10 h-[390px] bg-cover bg-center "
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#100F0F]/80 z-0"></div>

        <div className="relative z-10 text-white p-8 flex items-center justify-center h-full">
          <div>
            <h1 className="font-bold md:text-[48px] text-[30px] text-center">
              {t('title')}
            </h1>
            <p className=" text-center text-[20px]">
{t('description')}            </p>
          </div>
        </div>
      </div>

      <div className="container w-[85%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[300px] mt-[390px]">
        {services.map((item , index) => (
          <ServiceCard
          key ={index}
            title={item.title}
            description={item.shortDescription}
            icon={item.icon}
            link={item?.slug}
          />
        ))}
      </div>
      <Contact />
    </section>
  );
};

export default Services;
