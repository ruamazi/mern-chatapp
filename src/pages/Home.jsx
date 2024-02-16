import React from "react";
import MessageContainer from "../components/MessageContainer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 
    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-xl"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
