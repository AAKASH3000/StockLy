import { Outlet } from "react-router-dom"
import Navbar from "../landing_page/Navbar"
import Footer from "../landing_page/Footer"

export default function MainLayout(){
      return(
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )
}