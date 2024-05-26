function DisplayDevInfo({ data }) {
  const {
    fullName,
    image,
    email,
    phone,
    address,
    designation,
    website_link,
    website_sort,
    linkedin_link,
    linkedin_sort,
    github_link,
    github_sort,
    facebook_link,
    facebook_sort,
  } = data;
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-5xl mt-10">
      <div className=" md:flex ">
        <div className="md:flex-shrink-0">
          <img
            className="h-60 w-full object-cover md:w-60"
            src={image}
            alt="Developer"
          />
        </div>
        <div className="w-full p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Designation : {designation}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Full Name : {fullName}
          </h1>
          <p className="mt-2 text-gray-500">Email: {email}</p>
          <p className="mt-2 text-gray-500">Address: {address}</p>
          <p className="mt-2 text-gray-500">Phone: {phone}</p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-sky-400">
              Social Links
            </h2>
            <ul className="mt-2">
              <li>
                <span className="text-slate-400">
                  <b className="mr-4 text-gray-500">Website :</b> {website_link}
                </span>
                <span className="text-slate-600 ml-4">{website_sort}</span>
              </li>
              <li>
                <span className="text-slate-400">
                  <b className="mr-4 text-gray-500">GitHub :</b> {github_link}
                </span>
                <span className="text-slate-600 ml-4">{github_sort}</span>
              </li>
              <li>
                <span className="text-slate-400">
                  <b className="mr-4 text-gray-500">LinkedIn :</b>{" "}
                  {linkedin_link}
                </span>
                <span className="text-slate-600 ml-4">{linkedin_sort}</span>
              </li>
              <li>
                <span className="text-slate-400">
                  <b className="mr-4 text-gray-500">Facebook :</b>{" "}
                  {facebook_link}
                </span>
                <span className="text-slate-600 ml-4">{facebook_sort}</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <a
              href="#devInfoForm"
              className="px-4 py-2 rounded-md text-sm font-semibold text-gray-100 bg-blue-400 hover:bg-blue-600 "
            >
              Edit Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayDevInfo;
