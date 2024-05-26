import { useEffect, useState } from "react";
import {
  GetSearchParam,
  PostData,
  UpdateData,
  getCookie,
} from "../../../utils";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProjectForm = ({ data, setProjectData }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tags: [],
    image: "",
    source_code_link: "",
  });
  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("");
  const [loading, setLoading] = useState(false);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("update");

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

  const handleAddTag = () => {
    if (tagName && tagColor) {
      const tag = {
        name: tagName,
        color: `${tagColor}-text-gradient`,
      };
      setFormData((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      });
      setTagName("");
      setTagColor("");
    } else {
      toast.error("Please fill Name & Color fields");
    }
  };

  const handleDeleteTag = (num) => {
    setFormData((prev) => {
      return {
        ...prev,
        tags: prev.tags.filter((tag, index) => index !== num),
      };
    });
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let result = null;
    if (param) {
      const url = `https://portfolio-server-rose-psi.vercel.app/project/${param}`;
      const res = await UpdateData(url, formData, accessToken);
      result = res;
    } else {
      const url = `https://portfolio-server-rose-psi.vercel.app/project`;
      const res = await PostData(url, formData, accessToken);
      result = res;
    }
    if (result?.data?.modifiedCount) {
      toast.success(result?.message);
      setProjectData((prev) => {
        let newData = { ...formData, _id: param };
        const modifyIndex = prev.findIndex(
          (arr) => arr._id.toString() === param
        );
        prev[modifyIndex] = newData;
        return [...prev];
      });
      setLoading(false);
    } else {
      toast.success(result?.message);
      setProjectData((prev) => {
        return [...prev, formData];
      });
      setLoading(false);
    }
  };

  return (
    <div
      id="projectForm"
      className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl mt-10 p-8"
    >
      <h1 className="text-center text-xl font-bold text-gray-950 mb-8">
        {param ? "Update" : "Add"} Project Information
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-4">
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Project Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Project Name"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="source_code_link"
          >
            GitHub Source Code Link
          </label>
          <input
            id="source_code_link"
            name="source_code_link"
            type="url"
            value={formData.source_code_link}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter GitHub Source Code Link"
            required
          />
        </div>

        <div className="w-full">
          <p className="text-sky-400">Tags</p>
          <div className="w-full flex flex-col md:flex-row gap-4 ">
            <div className="w-full   md:w-[41%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name{" "}
                {formData.tags?.length > 0 &&
                  formData.tags.map((tag, i) => {
                    return (
                      <span
                        className="ml-2 text-sky-400 text-xs cursor-pointer"
                        key={i}
                        onClick={() => handleDeleteTag(i)}
                      >
                        {tag.name}
                      </span>
                    );
                  })}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Name of Technology"
              />
            </div>
            <div className="w-full md:w-[41%]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="color"
              >
                Color{" "}
                {formData.tags?.length > 0 &&
                  formData.tags.map((tag, i) => {
                    return (
                      <span
                        className="ml-2 text-sky-400 text-xs overflow-x-scroll cursor-pointer"
                        key={i}
                        onClick={() => handleDeleteTag(i)}
                      >
                        {tag.color.split("-")[0]}
                      </span>
                    );
                  })}
              </label>
              <input
                id="color"
                name="color"
                type="text"
                value={tagColor}
                onChange={(e) => setTagColor(e.target.value)}
                className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Tags Color name"
              />
            </div>
            <button
              onClick={handleAddTag}
              className="w-28 text-nowrap place-self-end text-white font-bold py-2 px-2 md:px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700"
            >
              Add Tag
            </button>
          </div>
        </div>

        <div className="w-full md:mr-[4%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Project Description
          </label>
          <textarea
            name="description"
            id="description"
            type="url"
            value={formData.description}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Project Description Hear"
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
            to="/admin/project"
            onClick={() =>
              setFormData({
                name: "",
                description: "",
                tags: [],
                image: "",
                source_code_link: "",
              })
            }
          >
            Add New Project
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
