import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetFetchData, GetSearchParam, getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import DisplayDescription from "./Description/DisplayDescription";
import DescriptionForm from "./Description/DescriptionForm";

function AdDescription() {
  const [descriptionData, setDescriptionData] = useState(null);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("deleted");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/description";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setDescriptionData(res);
      }
    }
    getData();
  }, [accessToken]);

  useEffect(() => {
    if (param) {
      setDescriptionData((prev) => {
        return prev?.filter((date) => !(date._id.toString() === param));
      });
      navigate("/admin/description");
    }
  }, [param, navigate]);

  if (!descriptionData) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <DisplayDescription data={descriptionData} />
      <DescriptionForm
        data={descriptionData}
        setDescriptionData={setDescriptionData}
      />
    </div>
  );
}

export default AdDescription;
