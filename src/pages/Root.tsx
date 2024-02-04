import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function Root() {
    return (
        <>
            {/* all the other elements */}
            <div id="detail" className="bg-rustBackGround bg-no-repeat bg-cover overflow-h-hidden max-w-[100vw] min-h-screen flex flex-col justify-between">
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}