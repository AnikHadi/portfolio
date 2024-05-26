import { useEffect, useState } from "react";
import {
  GetSearchParam,
  PostData,
  UpdateData,
  getCookie,
} from "../../../utils";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const DescriptionForm = ({ data, setDescriptionData }) => {
  const [formData, setFormData] = useState({
    description_type: "",
    description: "",
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
      const url = `https://portfolio-server-rose-psi.vercel.app/description/${param}`;
      const res = await UpdateData(url, formData, accessToken);
      result = res;
    } else {
      const url = `https://portfolio-server-rose-psi.vercel.app/description`;
      const res = await PostData(url, formData, accessToken);
      result = res;
    }
    if (result?.data?.modifiedCount) {
      toast.success(result?.message);
      setDescriptionData((prev) => {
        let newData = { ...formData, _id: param };
        const modifyIndex = prev.findIndex(
          (arr) => arr._id.toString() === param
        );
        prev[modifyIndex] = newData;
        return [...prev];
      });
      navigate("/admin/description");
      setLoading(false);
    } else {
      toast.success(result?.message);
      setDescriptionData((prev) => {
        return [...prev, result.data];
      });
      setLoading(false);
    }
    setFormData({
      description_type: "",
      description: "",
    });
  };

  return (
    <div
      id="descriptionForm"
      className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl mt-10 p-8"
    >
      <h1 className="text-center text-xl font-bold text-gray-950 mb-8">
        {param ? "Update" : "Add"} Description Data
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-4">
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description_type"
          >
            Select Description Type
          </label>
          <select
            id="description_type"
            name="description_type"
            value={formData.description_type}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" hidden>
              Select Description Type
            </option>
            <option value="introduction">Introduction</option>
            <option value="my_work">My Work</option>
          </select>
        </div>

        <div className="w-full md:mr-[4%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Description Hear"
            rows="4"
            // cols="30"
            required
          ></textarea>
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
            to="/admin/description"
            onClick={() =>
              setFormData({
                description_type: "",
                description: "",
              })
            }
          >
            Add New Description
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DescriptionForm;
