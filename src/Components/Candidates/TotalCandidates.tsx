import { useContext } from "react"
import { CandidateContext } from "../../Provider/CandidateContext"


const TotalCandidates = () => {
    const data = useContext(CandidateContext)

    if (!data){
        return <div>error data is undefined</div>  
    }

    const {total}=data

    return (
        <div className="top__query tw-mb-4 tw-flex tw-flex-wrap tw-gap-4 tw-justify-between tw-items-center">
            <div id="resultText" className="tw-text-[#242121] tw-text-2xl tw-font-medium"><span className="tw-font-bold tw-text-untitled-ui--gray800">{total}</span> Candidates Found</div>
        </div>
    )
}

export default TotalCandidates;