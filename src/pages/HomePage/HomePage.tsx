// import classNames from "classnames";
// import "./TrainRoutesList.css";
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { SortType } from "../../types/SortType";
// import { filterRoutes } from "../../utils/filterTrains";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEdit,
//   faTrash,
//   faToggleOff,
//   faToggleOn,
//   faCheck,
// } from "@fortawesome/free-solid-svg-icons";
// import { RouteContext } from "../../RouteProvider";



import { useEffect, useState } from "react";
import { testCall } from "../../api/wines";

interface Message {
  message: string;
}

export const HomePage: React.FC = () => {
  const [data, setData] = useState<Message>();

  const getDataFromServer = async () => {
    try {
      const dataFromServer = await testCall();
      setData(dataFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, [])

  // console.log('logg>>>>', data);
  
  return (
    <>
       <p>HomePage</p>

       {data && <p>{data.message}</p>}
       
    </>

  );
};
