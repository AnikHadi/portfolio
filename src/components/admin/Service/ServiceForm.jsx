import { useEffect, useState } from "react";
import {
  GetSearchParam,
  PostData,
  UpdateData,
  getCookie,
} from "../../../utils";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ServiceForm = ({ data, setServiceData }) => {
  const [formData, setFormData] = useState({
    title: "",
    icon: "",
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let result = null;
    if (param) {
      const url = `https://portfolio-server-rose-psi.vercel.app/service/${param}`;
      const res = await UpdateData(url, formData, accessToken);
      result = res;
    } else {
      const url = `https://portfolio-server-rose-psi.vercel.app/service`;
      const res = await PostData(url, formData, accessToken);
      result = res;
    }
    if (result?.data?.modifiedCount) {
      toast.success(result?.message);
      setServiceData((prev) => {
        let newData = { ...formData, _id: param };
        const modifyIndex = prev.findIndex(
          (arr) => arr._id.toString() === param
        );
        prev[modifyIndex] = newData;
        return [...prev];
      });
      navigate("/admin/service");
      setLoading(false);
    } else {
      toast.success(result?.message);
      setServiceData((prev) => {
        return [...prev, result.data];
      });
      setLoading(false);
    }
    setFormData({
      title: "",
      icon: "",
    });
  };

  return (
    <div
      id="serviceForm"
      className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl mt-10 p-8"
    >
      <h1 className="text-center text-xl font-bold text-gray-950 mb-8">
        {param ? "Update" : "Add"} Service Information
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-4">
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Service Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Service Title"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="icon"
          >
            Service Icon
          </label>
          <input
            id="icon"
            name="icon"
            type="url"
            value={formData.icon}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Service Icon URL"
            required
          />
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
            to="/admin/service"
            onClick={() =>
              setFormData({
                title: "",
                icon: "",
              })
            }
          >
            Add New Service
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
