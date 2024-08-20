
import Services from "./ServiceCard";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto my-10 max-w-7xl py-8 md:pt-10 md:pb-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full gap-5 lg:h-[380px] xl:h-[380px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">  <span className="text-blue-500 mr-1 md:mr-[2px]">Why </span>Choose Us?</h2>
          <p className="">
            Active in Indonesia's IT development since 2022 with software services, digital marketing strategies, and quality IT solutions.
          </p>
          <div className="flex-grow">
            <Services />
          </div>
        </div>
        <div className="w-full h-[200px] sm:h-[300px] lg:min-h-[380px] flex flex-col lg:w-1/2 relative">
          <img
            alt="Background"
            src="/assets/about-landing/bg.jpeg"
            className="rounded-xl h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-white inline-flex p-3 rounded-md items-center z-20">
            <img
              alt="Certified Engineers"
              src="/assets/about-landing/Trusted.svg"
              width={50}
              height={50}
              className="w-[30px] lg:w-[50px]"
            />
            <p className="text-mobileDesk md:text-webDesk text-gray-600">Successfully completed 30+ project</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default WhyChooseUs;
