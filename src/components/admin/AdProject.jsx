import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetFetchData, GetSearchParam, getCookie } from "../../utils";
import DisplayProject from "./Project/DisplayProject";
import ProjectForm from "./Project/ProjectForm";
import { useNavigate } from "react-router-dom";

function AdProject() {
  const [projectData, setProjectData] = useState(null);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("deleted");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/project";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setProjectData(res);
      }
    }
    getData();
  }, [accessToken]);

  useEffect(() => {
    if (param) {
      setProjectData((prev) => {
        return prev?.filter((date) => !(date._id.toString() === param));
      });
      navigate("/admin/project");
    }
  }, [param, navigate]);

  if (!projectData) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <DisplayProject data={projectData} />
      <ProjectForm data={projectData} setProjectData={setProjectData} />
    </div>
  );
}

export default AdProject;
