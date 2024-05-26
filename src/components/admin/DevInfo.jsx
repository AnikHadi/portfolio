import { useEffect, useState } from "react";
import DevInfoForm from "./DevInfo/DevInfoForm";
import DisplayDevInfo from "./DevInfo/DisplayDevInfo";
import { GetFetchData, getCookie } from "../../utils";
import Loading from "./Loading";

function DevInfo() {
  const [devInfo, setDevInfo] = useState(null);
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/dev_info";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setDevInfo(res[0]);
      }
    }
    getData();
  }, [accessToken]);

  if (!devInfo) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <DisplayDevInfo data={devInfo} />
      <DevInfoForm data={devInfo} setDevInfo={setDevInfo} />
    </div>
  );
}

export default DevInfo;
