import { Link, useNavigate } from "react-router-dom";
import { DeleteData, getCookie } from "../../../utils";
import { toast } from "react-toastify";

const SingleExperience = ({
  _id,
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => {
  const accessToken = getCookie("accessToken");
  const navigate = useNavigate();
  const deleteHandler = async (id) => {
    console.log(id);
    const proceed = confirm("Are you sure you want to delete this Experience?");
    if (proceed) {
      const url = `https://portfolio-server-rose-psi.vercel.app/experience/${id}`;
      const res = await DeleteData(url, accessToken);
      if (res?.data?.deletedCount > 0) {
        toast.success(res.message);
        navigate(`?deleted=${id}`);
      } else {
        toast.error(res.message);
      }
    }
  };
  return (
    <div className="w-full md:w-[47%] mx-auto p-2 md:p-6 bg-[#151030] shadow-[0_0_10px_0_rgba(0,0,0,0.153)] rounded-lg">
      <img
        src={icon}
        alt={`${title} experience`}
        className="w-24 h-24 object-cover rounded-full mx-auto"
      />
      <div className="mt-4">
        <h2 className={`text-2xl font-bold bg-[${iconBg}]`}>{title}</h2>

        <ol className="mt-2 ml-4 list-decimal">
          {points?.map((tag) => (
            <li
              key={tag}
              className={`inline-block  text-xs font-semibold mr-2 px-2 py-0.5 rounded `}
            >
              {tag}
            </li>
          ))}
        </ol>
        <p className="mt-2 text-slate-500">
          {company_name} {iconBg}
        </p>
        <p className="mt-0.5 text-slate-500">Experience : {date}</p>

        <Link
          to={`?update=${_id}`}
          className="mt-4 inline-block text-sm text-white bg-blue-600 hover:bg-blue-700  py-1 px-4 rounded"
        >
          {" "}
          Edit Project Info
        </Link>
        <button
          onClick={() => deleteHandler(_id)}
          className="ml-4 mt-4 inline-block text-sm text-white bg-red-600 hover:bg-red-700  py-1 px-4 rounded"
        >
          Delete Project
        </button>
      </div>
    </div>
  );
};

function DisplayExperience({ data }) {
  return (
    <div className="w-full mx-auto mt-10 p-2 md:p-4 bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl  ">
      <div className="flex justify-end mr-2">
        <a
          href={`#experienceForm`}
          className="mb-4  inline-block text-sm text-white bg-blue-600 hover:bg-blue-700  py-1 px-4 rounded"
        >
          Add New Experience
        </a>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-8">
        {data?.length > 0 &&
          data.map((project, inNum) => (
            <SingleExperience {...project} key={inNum} />
          ))}
      </div>
    </div>
  );
}

export default DisplayExperience;
