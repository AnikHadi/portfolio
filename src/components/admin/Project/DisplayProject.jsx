import { Link, useNavigate } from "react-router-dom";
import { DeleteData, getCookie } from "../../../utils";
import { toast } from "react-toastify";

const SingleProject = ({
  _id,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const accessToken = getCookie("accessToken");
  const navigate = useNavigate();
  const deleteHandler = async (id) => {
    console.log(id);
    const proceed = confirm("Are you sure you want to delete this project?");
    if (proceed) {
      const url = `https://portfolio-server-rose-psi.vercel.app/project/${id}`;
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
        src={image}
        alt={`${name} project`}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-100">{name}</h2>
        <p className="max-h-28 h-28 mt-2 text-slate-500 no-scrollbar overflow-y-auto">
          {description}
        </p>
        <div className="mt-2">
          {tags?.map((tag) => (
            <span
              key={tag.name}
              className={`inline-block  text-xs font-semibold mr-2 px-2 py-0.5 rounded ${tag.color} bg-black`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
        <p className="mt-2 text-slate-500">{source_code_link}</p>

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

function DisplayProject({ data }) {
  return (
    <div className="w-full mx-auto mt-10 p-2 md:p-4 bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl  ">
      <div className="flex justify-end mr-2">
        <a
          href={`#projectForm`}
          className="mb-4  inline-block text-sm text-white bg-blue-600 hover:bg-blue-700  py-1 px-4 rounded"
        >
          Add New Project
        </a>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-8">
        {data?.length > 0 &&
          data.map((project, inNum) => (
            <SingleProject {...project} key={inNum} />
          ))}
      </div>
    </div>
  );
}

export default DisplayProject;
