import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetFetchData, GetSearchParam, getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import DisplayTechnology from "./Technology/DisplayTechnology";
import TechnologyForm from "./Technology/TechnologyForm";

function AdTechnology() {
  const [technologyData, setTechnologyData] = useState(null);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("deleted");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/technology";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setTechnologyData(res);
      }
    }
    getData();
  }, [accessToken]);

  useEffect(() => {
    if (param) {
      setTechnologyData((prev) => {
        return prev?.filter((date) => !(date._id.toString() === param));
      });
      navigate("/admin/technology");
    }
  }, [param, navigate]);

  if (!technologyData) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <DisplayTechnology data={technologyData} />
      <TechnologyForm
        data={technologyData}
        setTechnologyData={setTechnologyData}
      />
    </div>
  );
}

export default AdTechnology;
