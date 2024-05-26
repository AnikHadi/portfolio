import { Link, useNavigate } from "react-router-dom";
import { DeleteData, getCookie } from "../../../utils";
import { toast } from "react-toastify";

const SingleService = ({ _id, title, icon }) => {
  const accessToken = getCookie("accessToken");
  const navigate = useNavigate();
  const deleteHandler = async (id) => {
    const proceed = confirm("Are you sure you want to delete this Service?");
    if (proceed) {
      const url = `https://portfolio-server-rose-psi.vercel.app/service/${id}`;
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
    <div className="w-full xs:w-56 mx-auto p-4 xs:p-6 bg-[#151030] shadow-[0_0_10px_0_rgba(0,0,0,0.153)] rounded-lg">
      <img
        src={icon}
        alt={`${title} service`}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-sm font-bold text-gray-100">{title}</h2>

        <div className="">
          <Link
            to={`?update=${_id}`}
            className="mt-4 mr-4 inline-block text-sm text-white bg-blue-600 hover:bg-blue-700  py-1 px-4 rounded"
          >
            {" "}
            Edit Service
          </Link>
          <button
            onClick={() => deleteHandler(_id)}
            className=" mt-4 inline-block text-sm text-white bg-red-600 hover:bg-red-700  py-1 px-4 rounded"
          >
            Delete Service
          </button>
        </div>
      </div>
    </div>
  );
};

function DisplayService({ data }) {
  return (
    <div className="w-full mx-auto mt-10 p-2 md:p-4 bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl  ">
      <div className="flex justify-end mr-2">
        <a
          href={`#serviceForm`}
          className="mb-4  inline-block text-sm text-white bg-blue-600 hover:bg-blue-700  py-1 px-4 rounded"
        >
          Add New Service
        </a>
      </div>
      <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-x-4 gap-y-8">
        {data?.length > 0 &&
          data.map((project, inNum) => (
            <SingleService {...project} key={inNum} />
          ))}
      </div>
    </div>
  );
}

export default DisplayService;
