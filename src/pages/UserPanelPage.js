import UserPanel from "../components/UserPanel.js";
import Footer from "../components/Footer.js";
import NaviUserPanel from "../components/NaviUserPanel.js";

export const UserPanelPage = () => {
    return (
        <>
            <NaviUserPanel />
            <UserPanel />
            <Footer />
        </>
    );
}
