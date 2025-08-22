import TotalCandidates from "./TotalCandidates";
import CandidateCard from "./CandidateCard";
import Pagination from "./Pagination";
import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { candidateFetch } from "../../api/services";
import { CandidateContext } from "../../Provider/CandidateContext";


const Candidate = () => {

    const {dispatch,filters} = useContext(CandidateContext);
const requestModel = {
    titles: filters.titles,
    skills: filters.skills,
    countries: filters.countries,
    levels:filters.levels,
    pageIndex:filters.pageIndex,
    pageSize:filters.pageSize,
    minYearsOfExperience:filters.minYearsOfExperience,
    maxYearsOfExperience:filters.maxYearsOfExperience
    // Add other filter parameters as needed
  };

    const { data:candidateData,isFetched,refetch} = useQuery({queryKey:['candidate'], queryFn:()=>candidateFetch(requestModel)});

    useEffect(() => {
    refetch(); // Refetch when filters change
  }, [filters, refetch]);

    useEffect(()=>{
        if(isFetched){
            dispatch({ type: "SET_LOADING", payload: false })
        }
    },[isFetched,dispatch])

  useEffect(()=>{
    if (candidateData){
      dispatch({ type: "SET_CANDIDATES", payload: candidateData.items });
    }
  },[candidateData,dispatch])

    return (
        <>
            <TotalCandidates />
            <div className="tw-flex tw-flex-col" id="myTabContent">
                <CandidateCard />
                {candidateData && (
        <Pagination
          pageIndex={candidateData.pageIndex}
          totalPages={candidateData.totalPages}
        />
      )}
            </div>
        </>
    )
}

export default Candidate;