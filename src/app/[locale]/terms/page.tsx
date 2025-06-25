import { getTranslations } from "next-intl/server";

const Terms= async()=>{
        const t = await getTranslations("Terms");
    const content  = t.raw("content");

    return(
        <main>
      <div className="absolute top-0 bg-[#100F0F] w-full py-30 z-2">
        <h2 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4 text-center">
         {t('title')}
        </h2>
      </div>
      <div className="md:w-[60%] w-[90%]  mx-auto mt-60 text-[20px] text-center py-10 text-white/80 leading-[40px]">
        {content .map((item:string , index:number)=>(
  <p className="md:text-[20px] text-[16px] text-left" key={index}>{item}</p>
        ))}
      </div>
      <div>

      </div>
    </main>
    )
}

export default Terms;