import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetFetchData, GetSearchParam, getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import DisplayService from "./Service/DisplayService";
import ServiceForm from "./Service/ServiceForm";

function AdService() {
  const [serviceData, setServiceData] = useState(null);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("deleted");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/service";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setServiceData(res);
      }
    }
    getData();
  }, [accessToken]);

  useEffect(() => {
    if (param) {
      setServiceData((prev) => {
        return prev?.filter((date) => !(date._id.toString() === param));
      });
      navigate("/admin/service");
    }
  }, [param, navigate]);

  if (!serviceData) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <DisplayService data={serviceData} />
      <ServiceForm data={serviceData} setServiceData={setServiceData} />
    </div>
  );
}

export default AdService;
