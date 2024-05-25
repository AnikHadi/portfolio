import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";

function MyProjectInformation() {
  return (
    <div className="w-full flex gap-x-8">
      <div className="basis-72  flex flex-col gap-1 py-5 shadow-[0_0_10px_0_rgba(0,0,0,0.153)] shadow-slate-800 rounded-md">
        <h1 className="text-xl font-bold text-center text-sky-500 mb-2">
          Social Media
        </h1>
        <div className="flex items-center gap-2 px-5 py-2 justify-between">
          <span className="font-bold flex items-center gap-2 ">
            <TfiWorld className="text-sky-400" />
            Website
          </span>
          <a
            href="https://hadiuzzaman.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-500"
          >
            hadiuzzaman
          </a>
        </div>
        <horizontal className="h-[1px] w-full bg-slate-500" />
        <div className="flex items-center gap-2 px-5 py-2 justify-between">
          <span className=" font-bold flex items-center gap-2 ">
            <FaGithub />
            Github
          </span>
          <a
            href="https://github.com/AnikHadi?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-500"
          >
            /AnikHadi
          </a>
        </div>
        <horizontal className="h-[1px] w-full bg-slate-500" />
        <div className="flex items-center gap-2 px-5 py-2 justify-between">
          <span className=" font-bold flex items-center gap-2 ">
            <FaLinkedin className="text-sky-700" />
            LinkedIn
          </span>
          <a
            href="https://www.linkedin.com/in/hadiuzzaman9/"
            target="_blank"
            rel="noreferrer"
            className="text-xs  text-slate-500"
          >
            /hadiuzzaman9
          </a>
        </div>
        <horizontal className="h-[1px] w-full bg-slate-500" />
        <div className="flex items-center gap-2 px-5 py-2 justify-between">
          <span className=" font-bold flex items-center gap-2 ">
            <SlSocialFacebook className="text-sky-500" />
            FaceBook
          </span>
          <a
            href="https://www.facebook.com/anik.hadi.7"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-500"
          >
            /anik.hadi.7
          </a>
        </div>
        <horizontal className="h-[1px] w-full bg-slate-500" />
      </div>

      <div className="flex-1 flex justify-between gap-x-8">
        <div className=" flex flex-1 flex-col gap-4 p-5  shadow-[0_0_10px_0_rgba(0,0,0,0.153)] shadow-slate-800 rounded-md">
          <h1 className="text-center font-bold text-xl">
            <span className="text-green-500">Completed</span> Project Status
          </h1>
          <div className="flex flex-col gap-0.5 text-sm">
            <p className="flex justify-between ">
              <span>Online E-commerce</span>
              <span className="flex gap-3">
                <span className="text-green-500">Completed</span>
                <a
                  href="https://www.aladdinmartbd.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </span>
            </p>
            <p className="flex justify-between">
              <span>Soma Enterprise</span>
              <span className="flex gap-3">
                <span className="text-green-500">Completed</span>
                <a
                  href="https://somaenterprise.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-1 flex-col gap-4 p-5 shadow-[0_0_10px_0_rgba(0,0,0,0.153)] shadow-slate-800 rounded-md">
          <h1 className="text-center font-bold text-xl">
            <span className="text-sky-500">Pending</span> Project Status
          </h1>
          <div className="flex flex-col gap-0.5 text-sm">
            <p className="flex justify-between">
              <span>Online School Management</span>
              <span className="flex gap-3 opacity-70">
                <span className="text-sky-500">Working</span>
                <span className="text-sky-500">40%</span>
                <a href="#" target="_blank" rel="noreferrer">
                  Link
                </a>
              </span>
            </p>
            <p className="flex justify-between">
              <span>Event Management</span>
              <span className="flex gap-3 opacity-70">
                <span className="text-sky-500">Working</span>
                <span className="text-sky-500">20%</span>
                <a href="#" target="_blank" rel="noreferrer">
                  Link
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjectInformation;
