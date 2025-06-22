import Contact from "@/components/Contact";

const ContactUs =()=>{
    return(
        <main>
      <div className="absolute top-0 bg-[#100F0F] w-full py-30 z-2">
        <h2 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4 text-center">
         Kontaktiere uns für weitere Informationen 
        </h2>
      </div>
      <div className=" md:mt-100 mt-80"> <Contact/></div>
   

        </main>
    )
}

export default ContactUs;