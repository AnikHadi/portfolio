import { useEffect, useState } from "react";
import Loading from "./Loading";
import { GetFetchData, GetSearchParam, getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import DisplayTestimonial from "./Testimonial/DisplayTestimonial";
import TestimonialForm from "./Testimonial/TestimonialForm";

function AdTestimonial() {
  const [testimonialData, setTestimonialData] = useState(null);
  const accessToken = getCookie("accessToken");
  const param = GetSearchParam("deleted");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const url = "https://portfolio-server-rose-psi.vercel.app/testimonial";
      const res = await GetFetchData(url, accessToken);
      if (res?.length > 0) {
        setTestimonialData(res);
      }
    }
    getData();
  }, [accessToken]);

  useEffect(() => {
    if (param) {
      setTestimonialData((prev) => {
        return prev?.filter((date) => !(date._id.toString() === param));
      });
      navigate("/admin/testimonial");
    }
  }, [param, navigate]);

  if (!testimonialData) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <DisplayTestimonial data={testimonialData} />
      <TestimonialForm
        data={testimonialData}
        setTestimonialData={setTestimonialData}
      />
    </div>
  );
}

export default AdTestimonial;
