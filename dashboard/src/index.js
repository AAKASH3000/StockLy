// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";
// import axios from "axios";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const verifyUser = async () => {
//   try {
//     const res = await axios.post(
//       "http://localhost:3002",   // your verify route
//       {},
//       { withCredentials: true }
//     );
//     return res.data.status;
//   } catch {
//     return false;
//   }
// };

// (async () => {
//   const isValid = await verifyUser();

//   if (!isValid) {
//     // 🔁 send back to frontend login
//     window.location.replace("http://localhost:3001/login");
//     return;
//   }

//   // ✅ authenticated → load dashboard
//   root.render(
//     <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
//   );
// })();


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
