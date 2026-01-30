import person from "../../assets/images/wi.JPg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Achmad Rivaldi Zulfah
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I help businesses and institutions grow by building high-performance websites and intelligent web systems designed for real users, real traffic, and real results.
          </p>

          {/* KONTAINER TOMBOL BARU */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:achmadrivaldizulfah@gmail.com"
            >
              Say Hello!
            </a>

            {/* Tombol WhatsApp */}
            <a
              href="https://wa.me/6281281229084"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs xxs:btn-lg bg-[#25D366] hover:bg-[#128C7E] border-none text-white flex items-center gap-2"
            >
           
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative">
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;