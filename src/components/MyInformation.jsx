import { Link } from "react-router-dom";
import developerImage from "../assets/developer_image.jpg";

function MyInformation() {
  const admin = "user";
  return (
    <div className="w-full flex gap-x-8">
      <div className="basis-72 flex flex-col gap-3 p-5  shadow-[0_0_10px_0_rgba(0,0,0,0.153)] shadow-slate-800 rounded-md">
        <div className="w-full flex items-center justify-center">
          <img
            className="w-32 rounded-full"
            src={developerImage}
            alt="developerLogo"
          />
        </div>
        <div className="flex flex-col items-center gap-1 ">
          <name>Hadiuzzaman</name>
          <position>Full Stack Developer</position>
          <address className="text-sm text-nowrap">
            Jessore, Khulna, Bangladesh.
          </address>
          <div className="flex  gap-4">
            <a
              href="https://github.com/AnikHadi?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1 bg-sky-400 rounded-md cursor-pointer hover:text-sky-400 hover:bg-white "
            >
              Follow
            </a>
            <a
              href="#contact"
              className="px-4 py-1 text-sky-400 border-2 border-sky-400 rounded-md cursor-pointer  hover:bg-sky-400 hover:text-white hover:border-white"
            >
              Message
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 px-8 py-5 shadow-[0_0_10px_0_rgba(0,0,0,0.153)] shadow-slate-800 rounded-md own-info">
        <div className=" gap-4 pb-4 border-b border-b-sky-400">
          <span className=" font-bold">Full Name</span>
          <span className="opacity-60">MD Hadiuzzaman Anik</span>
        </div>
        <div className="  gap-4 pb-4 border-b border-b-sky-400">
          <span className=" font-bold">Email</span>
          <span className="opacity-60">
            hadiuzzamananik@gmail.com, anikhadi9@gmail.com,
            hadiuzzaman.anik@gmail.com
          </span>
        </div>
        <div className="  gap-4 pb-4 border-b border-b-sky-400">
          <span className=" font-bold">Phone</span>
          <span className="flex gap-2 opacity-60">
            <a href="tel:+8801634042603">+8801634042603,</a>
            <a href="tel:+8801315789253">+8801315789253,</a>
            <a href="tel:+8801943183756">+8801943183756</a>
          </span>
        </div>
        <div className="  gap-4 pb-4 border-b border-b-sky-400">
          <span className=" font-bold">Address</span>
          <span className="opacity-60">
            Navaron, SarSha, Jessore, Khulna, Bangladesh.{" "}
          </span>
        </div>
        {admin === "admin" ? (
          <Link to="/admin/edit/info">Edit Information</Link>
        ) : null}
      </div>
    </div>
  );
}

export default MyInformation;
