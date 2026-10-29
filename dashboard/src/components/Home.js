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
    
     // useEffect(() => {
     //   const verifyCookie = async () => {
     //     if (!cookies.token) {
     //       window.location.replace("https://stockly-3.onrender.com/login"); // window.location.replace("http://localhost:3001/login");
     //       return;
     //     }
     //     const { data } = await axios.post(
     //       "https://stockly-1.onrender.com", //http://localhost:3002
     //       {},
     //       { withCredentials: true }
     //     );
     //     const { status, user } = data;
         
     //    //  return status 
     //    //    ? toast(`Hello ${user}`, {
     //    //        position: "top-right",
     //    //      })
     //    //    : (removeCookie("token"),  window.location.replace("http://localhost:3001/login"));
        
     //      // if (status && !toastShown.current) {
     //      //   toast(`Hello ${user}`, { position: "top-right" });
     //      //   toastShown.current = true;
     //      // } else if (!status) {
     //      //   removeCookie("token");
     //      //   window.location.replace("http://localhost:3001/login");
     //      // }
     //      if (status) {
     //        // ✅ CHECK FLAG
     //        const toastShown = sessionStorage.getItem("welcomeToastShown");

     //        if (!toastShown) {
     //          toast(`Hello ${user}`, { position: "top-right" });
     //          sessionStorage.setItem("welcomeToastShown", "true");
     //        }
     //      } else {
     //        removeCookie("token");
     //        window.location.replace("https://stockly-3.onrender.com/login"); //window.location.replace("http://localhost:3001/login");
     //      }

     //   };
     //   verifyCookie();
     // }, [cookies, ,removeCookie]);
     // const Logout = () => {
     //   removeCookie("token");
     //   window.location.replace("https://stockly-3.onrender.com/signup"); //window.location.replace("http://localhost:3001/signup");
     // };

    useEffect(() => {
      const LOGIN = "https://stockly-3.onrender.com/login";
      const params = new URLSearchParams(window.location.search);
      const urlToken = params.get("token");
      if (urlToken) {
        localStorage.setItem("token", urlToken);
        window.history.replaceState({}, "", window.location.pathname);
      }
      const token = localStorage.getItem("token");
      if (!token) return window.location.replace(LOGIN);
    
      axios
        .post("https://stockly-1.onrender.com", {}, { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data }) => {
          if (!data.status) throw new Error("invalid");
          if (!sessionStorage.getItem("welcomeToastShown")) {
            toast(`Hello ${data.user}`, { position: "top-right" });
            sessionStorage.setItem("welcomeToastShown", "true");
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          window.location.replace(LOGIN);
        });
    }, []);
    
    const Logout = () => {
      localStorage.removeItem("token");
      window.location.replace("https://stockly-3.onrender.com/signup");
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
