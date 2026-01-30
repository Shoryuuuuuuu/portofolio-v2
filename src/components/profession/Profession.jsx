import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Business Websites",
    description:
      "Professional company profiles and institutional platforms that improve credibility, communication, and public trust.",
  },
  {
    id: 2,
    title: "Custom Web Systems",
    description:
      "Scalable systems built with modern frameworks for data management, dashboards, and operational workflows.",
  },
  {
    id: 3,
    title: "AI-Powered Features",
    description:
      "Practical AI solutions such as image recognition, analytics, and automation to support smarter business decisions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I build business-focused websites and AI-powered applications that help companies increase credibility, attract customers, and streamline operations.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My work combines clean design, scalable development, and practical AI solutions — delivering platforms that are not just visually strong, but ready to be used in real-world business and institutional environments.
          </p>
        </div>
        <a
          href="mailto:achmadrivaldizulfah@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
