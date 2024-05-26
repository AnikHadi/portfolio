import { useEffect, useState } from "react";
import { UpdateData, getCookie } from "../../../utils";
import { toast } from "react-toastify";

const DevInfoForm = ({ data, setDevInfo }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    email: "",
    phone: "",
    address: "",
    designation: "",
    website_sort: "",
    website_link: "",
    github_sort: "",
    github_link: "",
    linkedin_sort: "",
    linkedin_link: "",
    facebook_sort: "",
    facebook_link: "",
  });
  const [loading, setLoading] = useState(false);
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    if (data?._id) {
      const newData = JSON.parse(JSON.stringify(data));
      setFormData(newData);
    }
  }, [data]);

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
    const url = `https://portfolio-server-rose-psi.vercel.app/dev_info/6651e2714279ce412786dec4`;
    const res = await UpdateData(url, formData, accessToken);
    if (res?.data?.modifiedCount) {
      toast.success(res?.message);
      setLoading(false);
      setDevInfo(formData);
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <div
      id="devInfoForm"
      className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl mt-10 p-8"
    >
      <h1 className="text-center text-xl font-bold text-gray-950 mb-8">
        Add Dev Information
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-wrap gap-4">
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter full name"
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
            type="text"
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
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter address"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            id="designation"
            name="designation"
            type="text"
            value={formData.designation}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter designation"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="website_sort"
          >
            Website Sort
          </label>
          <input
            id="website_sort"
            name="website_sort"
            type="text"
            value={formData.website_sort}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Website Sort Name"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="website_link"
          >
            Website Link
          </label>
          <input
            id="website_link"
            name="website_link"
            type="url"
            value={formData.website_link}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Website link URL"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="github_sort"
          >
            Github Sort
          </label>
          <input
            id="github_sort"
            name="github_sort"
            type="text"
            value={formData.github_sort}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter GitHub Sort Name"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="github_link"
          >
            Github Link
          </label>
          <input
            id="github_link"
            name="github_link"
            type="url"
            value={formData.github_link}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter GitHub profile URL"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="linkedin_sort"
          >
            LinkedIn Sort
          </label>
          <input
            id="linkedin_sort"
            name="linkedin_sort"
            type="text"
            value={formData.linkedin_sort}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter LinkedIn Sort Name"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="linkedin_link"
          >
            LinkedIn Link
          </label>
          <input
            id="linkedin_link"
            name="linkedin_link"
            type="url"
            value={formData.linkedin_link}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter LinkedIn profile URL"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="facebook_sort"
          >
            Facebook Sort
          </label>
          <input
            id="facebook_sort"
            name="facebook_sort"
            type="text"
            value={formData.facebook_sort}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Facebook Sort Name"
            required
          />
        </div>
        <div className="w-full   md:w-[47%]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="facebook_link"
          >
            Facebook Link
          </label>
          <input
            id="facebook_link"
            name="facebook_link"
            type="url"
            value={formData.facebook_link}
            onChange={handleChange}
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Facebook profile URL"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading
                ? "bg-slate-500 cursor-wait"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {loading ? <span className=""> Updating ...</span> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DevInfoForm;
