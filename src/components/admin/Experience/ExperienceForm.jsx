import { useEffect, useState } from "react";
import {
  GetSearchParam,
  PostData,
  UpdateData,
  getCookie,
} from "../../../utils";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ExperienceForm = ({ data, setExperienceData }) => {
  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    icon: "",
    iconBg: "",
    date: "",
    points: [],
  });
  const [point, setPoint] = useState("");
  const [loading, setLoading] = useState(false);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("update");
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.length > 0) {
      if (param) {
        const newData = data.filter((data) => data._id.toString() === param);
        setFormData(newData[0]);
      }
    }
  }, [data, param]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPoint = () => {
    if (point) {
      setFormData((prev) => {
        return {
          ...prev,
          points: [...prev.points, point],
        };
      });
      setPoint("");
    } else {
      toast.error("Please fill Points fields");
    }
  };

  const handleDeletePoint = (num) => {
    setFormData((prev) => {
      return {
        ...prev,
        points: prev.points.filter((tag, index) => index !== num),
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let result = null;
    if (param) {
      const url = `https://portfolio-server-rose-psi.vercel.app/experience/${param}`;
      const res = await UpdateData(url, formData, accessToken);
      result = res;
    } else {
      const url = `https://portfolio-server-rose-psi.vercel.app/experience`;
      const res = await PostData(url, formData, accessToken);
      result = res;
    }
    if (result?.data?.modifiedCount) {
      toast.success(result?.message);
      setExperienceData((prev) => {
        let newData = { ...formData, _id: param };
        const modifyIndex = prev.findIndex(
          (arr) => arr._id.toString() === param
        );
        prev[modifyIndex] = newData;
        return [...prev];
      });
      navigate("/admin/experience");
      setLoading(false);
    } else {
      toast.success(result?.message);
      setExperienceData((prev) => {
        return [...prev, formData];
      });
      setLoading(false);
    }
    setFormData({
      title: "",
      company_name: "",
      icon: "",
      iconBg: "",
      date: "",
      points: [],
    });
  };

  return (
    <div
      id="experienceForm"
      className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl mt-10 p-8"
    >
      <h1 className="text-center text-xl font-bold text-gray-950 mb-8">
        {param ? "Update" : "Add"} Experience Information
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-4">
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Experience Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Experience Title"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="company_name"
          >
            Experience Company Name
          </label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={formData.company_name}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Experience Company Name"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="icon"
          >
            Icon URL
          </label>
          <input
            id="icon"
            name="icon"
            type="url"
            value={formData.icon}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter  Icon URL"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="iconBg"
          >
            Icon Background Color
          </label>
          <input
            id="iconBg"
            name="iconBg"
            type="text"
            value={formData.iconBg}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Icon Background Color"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Experience Date
          </label>
          <input
            id="date"
            name="date"
            type="text"
            value={formData.date}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Experience Date"
            required
          />
        </div>

        <div className="w-full  md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Points
          </label>
          <div className="flex gap-x-4">
            <input
              id="name"
              name="name"
              type="text"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Name of Technology"
            />
            <span
              onClick={handleAddPoint}
              className="w-44 text-nowrap place-self-end text-white font-bold py-2 px-2  rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 cursor-pointer"
            >
              Add Points
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-2">
          {formData.points?.length > 0 &&
            formData.points.map((tag, i) => {
              return (
                <span
                  className="ml-2 text-slate-700 text-base cursor-pointer"
                  key={i}
                  onClick={() => handleDeletePoint(i)}
                >
                  <span className="font-bold">{i + 1} .</span> {tag}
                </span>
              );
            })}
        </div>

        <div className="w-full flex items-center  gap-x-4">
          <button
            type="submit"
            className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading
                ? "bg-slate-500 cursor-wait"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <span className=""> {param ? "Updating ..." : "Adding ..."}</span>
            ) : param ? (
              "Update"
            ) : (
              "Added"
            )}
          </button>
          <Link
            className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700"
            to="/admin/experience"
            onClick={() =>
              setFormData({
                title: "",
                company_name: "",
                icon: "",
                iconBg: "",
                date: "",
                points: [],
              })
            }
          >
            Add New Experience
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
