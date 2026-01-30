import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/saiba.jpeg";
import card2 from "../../assets/images/portfolio-images/kel.jpeg";
import card3 from "../../assets/images/portfolio-images/pus.jpeg";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Company Profile",
    title: "Saibaartha Company Website",
    description:
      "Designed a high-credibility company website to improve trust, clarify services, and streamline early-stage engagement with government and B2B partners.",
    link: "https://saibaartha.com/",
  },
  {
    id: 2,
    image: card2,
    category: "Family Website",
    title: "Trahtjokrodimejo Family Website",
    description:
      "Built a custom web platform for digital family archives, featuring structured member management, relationship mapping, and secure content access.",
    link: "https://www.trahtjokrodimejo.com/",
  },
  {
    id: 3,
    image: card3,
    category: "Institutional Website",
    title: "SMK Pusaka 1 Jakarta Website",
    description:
      "Delivered a professional school website for SMK Pusaka 1 Jakarta that improves how the institution shares key information with its community enabling students, parents, and visitors to quickly access programs, events, and contact details online.",
    link: "https://smkpusaka1jakarta.com/",
  },

];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here are some examples of my latest work, showcasing my expertise in
creating websites that focus on solving user problems.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        
      </div>
    </div>
  );
};

export default Portfolio;
