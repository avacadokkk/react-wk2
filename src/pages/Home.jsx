import Header from "../components/Header";
import Footer from "../components/Footer";
import Contain from "../components/contain";
function Home() {
    return (
        <>
        <div className="container layout">
        <Header className="layout-haeder"/>
        <Contain className="layout-contain" />
        <Footer  className="layout-footer"/>
        </div>
        </>
    );
    }
export default Home;
