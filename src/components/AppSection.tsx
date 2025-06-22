import Image from "next/image";
import Button from "./Button";

const AppSection = () => {
  return (
    <section className="container w-[85%] mx-auto  mt-[150px]">
                        <h2 className="font-bold md:text-[48px] text-[30px] text-center mb-[150px]">Our App</h2>

        <div className="bg-[#100F0F] rounded-[40px] rounded-tr-none  md:p-20 p-12">
      <div className="flex md:flex-row flex-col gap-8">
        <div className="md:w-[40%] w-full mt-[-200px]">
          <Image
            src="/mobileapp.png"
            alt="mobile-app"
            width={600}
            height={600}
            className="w-full h-full object-cover "
          />
        </div>
        <p className="md:w-[60%] w-full md:leading-[40px] leading-[30px] md:text-[20px] text-[16px] text-white/80">
          Unsere innovative App hilft deinem Unternehmen , Mitarbeiter effizient
          zu verwalten , die Qualitat zu steigern und wertvolles Feedback von
          Kunden zu sammeln . Mit einem vollstandigen System fur Team -und
          Auftragsmanagement bleiben keine Wunsche offen - alles in einer App.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div>
          <h4 className="text-[20px] mt-4 font-medium">Google Live Tracking</h4>
          <p className="text-[16px] text-white/80 mt-2">
            Verfolge deine Mitarbeiter oder Bestellungen in Echtzeit mit Google
            Maps.
          </p>
        </div>
        <div>
          <h4 className="text-[20px] mt-4 font-medium">Google Live Tracking</h4>
          <p className="text-[16px] text-white/80 mt-2">
            Verfolge deine Mitarbeiter oder Bestellungen in Echtzeit mit Google
            Maps.
          </p>
        </div>
        <div>
          <h4 className="text-[20px] mt-4 font-medium">Google Live Tracking</h4>
          <p className="text-[16px] text-white/80 mt-2">
            Verfolge deine Mitarbeiter oder Bestellungen in Echtzeit mit Google
            Maps.
          </p>
        </div>
        <div>
          <h4 className="text-[20px] mt-4 font-medium">Google Live Tracking</h4>
          <p className="text-[16px] text-white/80 mt-2">
            Verfolge deine Mitarbeiter oder Bestellungen in Echtzeit mit Google
            Maps.
          </p>
        </div>
        <div>
          <h4 className="text-[20px] mt-4 font-medium">Google Live Tracking</h4>
          <p className="text-[16px] text-white/80 mt-2">
            Verfolge deine Mitarbeiter oder Bestellungen in Echtzeit mit Google
            Maps.
          </p>
        </div>
        <div>
          <h4 className="text-[20px] mt-4 font-medium">Google Live Tracking</h4>
          <p className="text-[16px] text-white/80 mt-2">
            Verfolge deine Mitarbeiter oder Bestellungen in Echtzeit mit Google
            Maps.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-center items-center mt-8 ">
        <p className="text-[20px]">
          Jetzt herunterladen und Reinigung auf das nachste Level bringen!
        </p>
        <Button name="Download App" />
      </div>
      </div>
    </section>
  );
};

export default AppSection;
