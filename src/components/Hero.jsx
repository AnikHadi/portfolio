import { styles } from "../styles";
import MyInformation from "./MyInformation";
import MyProjectInformation from "./MyProjectInformation";

const Hero = () => {
  return (
    <section className={`${styles.paddingX} mt-[80px] w-full  mx-auto`}>
      <div
        className={`${styles.paddingX}  inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Hadiuzzaman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web application
          </p>
        </div>
      </div>
      <div
        className={`${styles.padding} max-w-7xl mx-auto  z-0 -mt-48 mr-3 w-full flex flex-col gap-8`}
      >
        <MyInformation />
        <MyProjectInformation />
      </div>
    </section>
  );
};

export default Hero;
