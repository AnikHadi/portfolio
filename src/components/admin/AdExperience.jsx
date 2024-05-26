import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetFetchData, GetSearchParam, getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import DisplayExperience from "./Experience/DisplayExperience";
import ExperienceForm from "./Experience/ExperienceForm";

function AdExperience() {
  const [experienceData, setExperienceData] = useState(null);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("deleted");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/experience";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setExperienceData(res);
      }
    }
    getData();
  }, [accessToken]);

  useEffect(() => {
    if (param) {
      setExperienceData((prev) => {
        return prev?.filter((date) => !(date._id.toString() === param));
      });
      navigate("/admin/experience");
    }
  }, [param, navigate]);

  if (!experienceData) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <DisplayExperience data={experienceData} />
      <ExperienceForm
        data={experienceData}
        setExperienceData={setExperienceData}
      />
    </div>
  );
}

export default AdExperience;
