import BranchCard from "./BranchCard";
import Button from "./Button";


const BranchesSection = () => {
  return (
    <section className="container w-[85%] mx-auto mt-20">
      <h2 className="font-bold md:text-[48px] text-[30px] text-center mb-14">
        Branchen
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BranchCard title="Industrie" imageSrc="/hero-image.jpg" link={`services/${ServiceWorker.slug}`}/>
        <BranchCard title="Industrie" imageSrc="/hero-image.jpg"/>
        <BranchCard title="Industrie" imageSrc="/hero-image.jpg"/>
        <BranchCard title="Industrie" imageSrc="/hero-image.jpg"/>
        <BranchCard title="Industrie" imageSrc="/hero-image.jpg"/>
        <div className="flex justify-center items-center">
          {" "}
            <Button name="Show More" href="/branches"/>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
