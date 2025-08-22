import { useEffect } from "react";
import Header from "../Components/Header";
import CandidateInfo from "../Components/CandidateDetail/CandidateInfo";
import Footer from "../Components/Footer";


const CandidateDetail=()=> {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <CandidateInfo/>
            <Footer />
        </>
    )
}

export default CandidateDetail;