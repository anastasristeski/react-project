import { Outlet, useLocation } from "react-router-dom";
import NavBarHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { houseLogo } from "../../assets/icons";
export default function RootLayout(){
 const { pathname } = useLocation();
 console.log(pathname);
 const showLogo= pathname.includes("paid-courses") || pathname.includes("quizzes");
 const showFooter = pathname.includes("profile");

    return (
       <div className="app-conainer">
        {showLogo ?  <NavBarHeader logo={houseLogo}/>: <NavBarHeader />}
       <main style={{flex: 1}}>
         <Outlet />
       </main>
       {!showFooter && <Footer />}
        </div>
    );
}