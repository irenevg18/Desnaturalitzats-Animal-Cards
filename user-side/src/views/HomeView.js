import React, { useEffect, useState } from "react";
import RegionsGrid from "../components/RegionsGrid";
import gridLines from "../img/grid-lines2.png";


function HomeView(props) {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getRegions();
  }, []);
  const getRegions = () => {
    fetch("/regions")
      .then((res) => res.json())
      .then((json) => {
        setRegions(json);

        console.log(json);
      })
      .catch((error) => {
        console.log("Network error: ", error.message);
      });
  };
  return (
    <div className="relative mt-4">

      <img src={gridLines} className="absolute w-screen h-[800px]"></img>
      <div className="mx-10">
        <h3 className="ml-16 font-bold text-3xl text-[#2F430D] bg-[#c57e13] w-[470px] mb-12">
          O descobreix els que viuen aquí:
        </h3>
        <RegionsGrid regions={regions} />
      </div>
    </div>
  );
}
export default HomeView;
