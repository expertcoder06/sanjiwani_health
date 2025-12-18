
import React from "react";
import doctor from "../assets/doctor.png";
import msme from "../assets/msme.jpg";
import hlg from "../assets/hlg.png";
import healthworld from "../assets/healthworld.png";
import saryanm from "../assets/saryanm.png";
import mission from "../assets/mission.jpg";
import teresa from "../assets/teresa.png";
import appolo from "../assets/appolo.png";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#1fa2a6] to-[#2bb7b3] flex justify-center items-center p-8">
      
    
      <div className="bg-white rounded-[30px] w-full max-w-[1400px] p-12">

      
        <div className="flex items-center justify-between gap-12">

         
          <div className="max-w-[600px]">
            <h1 className="text-5xl font-bold text-[#035F69] leading-tight">
              Your <span className="text-red-500">Health</span>, <br />
              Connected With Care.
            </h1>

            <p className="mt-6 text-lg text-[#333333]">
              Find trusted clinics and hospitals near you in just a few taps
            </p>

            <div className="mt-8 flex gap-6">
              <button className="px-10 py-4 rounded-full bg-red-500 text-white font-medium cursor-pointer">
                Book Appointment
              </button>

              <button className="px-10 py-4 rounded-full border border-[#035F69] text-[#035F69] font-medium cursor-pointer">
                Find Emergency Care
              </button>
            </div>
          </div>

        
          <div className="w-[420px]">
            <img src={doctor} alt="Doctor" className="w-full object-contain" />
          </div>
        </div>

        
        <div className="mt-16 flex items-center justify-between gap-6">

          <StatCard value="25+" label="Verified Doctors" />
          <StatCard value="14+" label="Partner Hospitals" />

         
          <div className="w-[210px] p-6 rounded-[20px] border text-center">
            <img src={msme} alt="MSME" className="mx-auto h-[60px]" />
            <button className="mt-4 px-6 py-2 rounded-full border text-[#035F69] cursor-pointer">
              About Us
            </button>
          </div>

          <StatCard value="18+" label="Partner Diagnostic Centers" small />
          <StatCard value="10+" label="Partner Medical Clinics" small />
        </div>

       
        <div className="mt-14 flex items-center justify-between opacity-90">
          <PartnerLogo src={hlg}  />
          <PartnerLogo src={healthworld} />
          <PartnerLogo src={saryanm} />
          <PartnerLogo src={mission} />
          <PartnerLogo src={teresa} />
          <PartnerLogo src={appolo} />
        </div>

      </div>
    </section>
  );
};



const StatCard = ({ value, label, small }) => (
  <div className="w-[210px] p-6 rounded-[20px] border text-center">
    <h3 className="text-4xl font-bold text-[#035F69]">{value}</h3>
    <p className={`mt-2 text-[#333333] ${small ? "text-sm" : ""}`}>
      {label}
    </p>
  </div>
);

const PartnerLogo = ({ src }) => (
  <img src={src} alt="partner" className="h-[40px] object-contain" />
);

export default Home;