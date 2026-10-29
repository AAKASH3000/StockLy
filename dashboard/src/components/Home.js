import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {

    const [cookies, removeCookie] = useCookies([]);
    const toastShown = useRef(false);
    
     useEffect(() => {
       const verifyCookie = async () => {
         if (!cookies.token) {
           window.location.replace("http://localhost:3001/login");
           return;
         }
         const { data } = await axios.post(
           "https://stockly-1.onrender.com", //https://stockly-1.onrender.com
           {},
           { withCredentials: true }
         );
         const { status, user } = data;
         
        //  return status 
        //    ? toast(`Hello ${user}`, {
        //        position: "top-right",
        //      })
        //    : (removeCookie("token"),  window.location.replace("http://localhost:3001/login"));
        
          // if (status && !toastShown.current) {
          //   toast(`Hello ${user}`, { position: "top-right" });
          //   toastShown.current = true;
          // } else if (!status) {
          //   removeCookie("token");
          //   window.location.replace("http://localhost:3001/login");
          // }
          if (status) {
            // ✅ CHECK FLAG
            const toastShown = sessionStorage.getItem("welcomeToastShown");

            if (!toastShown) {
              toast(`Hello ${user}`, { position: "top-right" });
              sessionStorage.setItem("welcomeToastShown", "true");
            }
          } else {
            removeCookie("token");
            window.location.replace("http://localhost:3001/login");
          }

       };
       verifyCookie();
     }, [cookies, ,removeCookie]);
     const Logout = () => {
       removeCookie("token");
       window.location.replace("http://localhost:3001/signup");
     };
   
   
  return (
    <>
      <TopBar Logout={Logout}/>
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
