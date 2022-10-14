import Footer from "../components/Footer.js";
import NaviUserPanel from "../components/NaviUserPanel.js";
import { Login } from "../components/Login.js"
export const LoginPage = () => {
    return (
        <>
            <NaviUserPanel />
            <Login />
            <Footer />
        </>
    );
}