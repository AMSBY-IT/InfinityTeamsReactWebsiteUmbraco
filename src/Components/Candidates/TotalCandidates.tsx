import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";


const TotalCandidates = () => {
    const {dispatch,isChecked } = useContext(CandidateContext);
 const clearFilters =()=>{
dispatch({ 
        type: "SET_FILTERS", 
        payload: {
          titles: [],
    skills: [] ,
    countries: [],
    levels: [],
    pageIndex: 1,
    pageSize: 10,
    minYearsOfExperience: null,
    maxYearsOfExperience: null
        }
      });
      Object.keys(isChecked).forEach(guid => {
            dispatch({
                type: "SET_CHECKED",
                payload: { id: guid, checked: false }
            });
        });
 }

    return (
        <div className="top__query tw-mb-4 tw-flex tw-flex-wrap tw-gap-4 tw-justify-between tw-items-center">
            <div id="resultText" className="tw-text-[#242121] tw-text-2xl tw-font-medium"><span className="tw-font-bold tw-text-untitled-ui--gray800"></span>Candidates</div>
            <div onClick={clearFilters} className="tw-cursor-pointer">
                <span className="tw-text-sm tw-font-normal tw-px-3 tw-py-2 tw-bg-[#9c97a7] tw-rounded-md">
                    Clear filters
                </span>
            </div>
        </div>
    )
}

export default TotalCandidates;