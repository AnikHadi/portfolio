import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  // Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import Dashboard from "./components/admin/Dashboard.jsx";
import AdDescription from "./components/admin/AdDescription.jsx";
import CommonDashboard from "./components/admin/CommonDashboard.jsx";
import AdTestimonial from "./components/admin/AdTestimonial.jsx";
import AdTechnology from "./components/admin/AdTechnology.jsx";
import AdService from "./components/admin/AdService.jsx";
import AdProject from "./components/admin/AdProject.jsx";
import AdExperience from "./components/admin/AdExperience.jsx";
import DevInfo from "./components/admin/DevInfo.jsx";
import NotFound from "./components/NotFound.jsx";
import Login from "./components/admin/Login.jsx";

const admin = "admin";

const LandingPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      {/* <Experience /> */}
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {admin === "admin" && (
          <>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin" element={<CommonDashboard />}>
              <Route path="dev_info" element={<DevInfo />} />
              <Route path="experience" element={<AdExperience />} />
              <Route path="project" element={<AdProject />} />
              <Route path="service" element={<AdService />} />
              <Route path="technology" element={<AdTechnology />} />
              <Route path="testimonial" element={<AdTestimonial />} />
              <Route path="description" element={<AdDescription />} />
            </Route>
          </>
        )}
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
