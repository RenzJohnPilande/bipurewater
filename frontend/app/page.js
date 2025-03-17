"use client";
import ClientForm from "./components/ClientForm";

const Home = () => {
  return (
    <div className="flex flex-wrap w-full justify-center content-center min-h-screen gap-4">
      <div className="flex flex-wrap w-full justify-center">
        <img src="/images/BI-PURE-LOGO.png" alt="Bi Pure Logo" className="w-[100px]" />
      </div>
      <ClientForm />
    </div>
  );
};

export default Home;
