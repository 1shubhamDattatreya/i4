import "../page-one/page-one.css";
import PageOne from "../page-one/page";
import PageTwo from "../page-two/page";
import Page_three from "../page-three/page";
import Page_four from "../page-four/page";
import Page_five from "../page-five/page";
import Page_six from "../page-six/page";
import Footer from "../footer/page";

function Page_Home() {
    return (
        <>
            <div className='home'>
                <PageOne/>
                <PageTwo/>
                <Page_three/>
                <Page_four/>
                <Page_five/>
                <Page_six/>
                <Footer/>
            </div>
        </>
    );
}
export default Page_Home;
