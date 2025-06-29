import Button from "./Button"

const HeroSectionB=()=>{
    return(
        <section   className="h-screen w-full bg-cover bg-center flex items-center justify-center mt-[-90px]"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}>
<div className="absolute w-full h-full bg-black/70"></div>
     <div className="absolute w-[60%] mx-auto text-center"
      >
        <h1 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4">
         Ihr Zuhause verdient die beste 
          <span className="text-[#2BA7FF]"> Reinigung</span>{" "}
        </h1>
        <p
          className="md:text-[20px] text-[16px] leading-[40px] md:mb-12 mb-6"
       
        >
          Erleben Sie professionelle Reinigungsdienste, die Ihre Räume makellos, frisch und hygienisch hinterlassen. Überlassen Sie uns die Arbeit und genießen Sie Ihre freie Zeit.
        </p>
        <div
      
        >
          {" "}
          <Button name='Jetzt buchen' href="/contact" />
        </div>
      </div>
        </section>
    )
}

export default HeroSectionB