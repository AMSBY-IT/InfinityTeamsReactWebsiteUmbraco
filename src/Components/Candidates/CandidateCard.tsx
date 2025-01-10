import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import { useNavigate } from "react-router-dom";
import {Candidates} from "../../Types/types"


const CandidateCard = () => {
    const data = useContext(CandidateContext);

    if (!data){
        return <div>error data is undefined</div>  
      }

    const {candidates}=data

    const navigate = useNavigate()
    const handleCandidateClick = (candidate:Candidates) => {
        navigate(`/candidatedetail/${candidate.id}`, { state: { candidate } });
    };
    
    return (
        <div className="" role="tabpanel" id="grid">
            <div className="tw-grid max-lg:tw-grid-cols-3 max-md:tw-grid-cols-2 max-sm:tw-grid-cols-1 max-xl:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3" id="candidateContainer">
                {candidates.map((candidate:Candidates) => (

                    <div className="tw-flex" key={candidate.id}>
                        <div className="tw-flex tw-flex-col rts__job__card tw-p-4 tw-border-[1px] tw-bg-white tw-border-[#dcdddf] tw-rounded-md tw-cursor-pointer hover:tw-bg-hover-gradient" onClick={() => handleCandidateClick(candidate)}>
                            <div className="tw-flex tw-gap-4">
                                <div className="tw-flex">
                                    <img src={`https://ui-avatars.com/api/?name=${candidate.firstName}+${candidate.lastName}`} alt="" className="tw-w-[60px] tw-h-[60px] tw-rounded-sm" />
                                </div>
                                <div className="tw-flex tw-flex-col">
                                    <h2 className="tw-leading-5 tw-text-[18px] tw-text-untitled-ui--gray900 tw-m-0 tw-font-medium">{candidate.firstName}</h2>
                                    <span className="tw-text-[11px] tw-font-medium tw-text-untitled-ui--gray800">{candidate.currentMostRecentJobTitle}</span>
                                    <span className="tw-text-[12px] tw-text-untitled-ui--gray900 tw-flex tw-gap-1 tw-items-center">{candidate.locationCity ? <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-4 tw-fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg> : ""}{candidate.locationCity}</span>
                                </div>
                            </div>
                            <div className="tw-flex tw-items-center tw-justify-between tw-mt-6">
                                <p className="tw-text-[14px] tw-text-untitled-ui--gray800 tw-m-0 tw-font-medium">Student Entry</p>
                                <p className="tw-text-[14px] tw-text-untitled-ui--gray800 tw-m-0 tw-font-medium">Remote Job</p>
                                <p className="tw-text-[14px] tw-text-untitled-ui--gray800 tw-m-0 tw-font-medium">$ 10520 PA</p>
                            </div>
                            <p className="candi-desc tw-mt-4 tw-text-sm tw-text-black tw-line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis iure in provident,
                                nulla veniam dolores reprehenderit cumque vitae eos mollitia explicabo cum nesciunt ut!
                            </p>

                            <div className="job__tags tw-flex tw-gap-2 tw-mt-4 tw-flex-wrap">

                                {candidate.skills && candidate.skills.length > 0 ? candidate.skills.slice(0, 3).map((skill) => (
                                    <a href="" className="tw-px-3 tw-py-2 tw-rounded-[4px] tw-whitespace-nowrap tw-bg-untitled-ui--primary600 tw-flex tw-leading-4 tw-capitalize tw-text-untitled-ui--primary100 tw-text-[14px]">{skill}</a>))
                                    : <span>No skills listed</span>
                                }


                            </div>
                            <div className="tw-flex tw-items-center tw-justify-end date-div tw-mt-auto">
                                <div className="tw-flex tw-gap-3">
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="tw-w-5 tw-fill-[#7f56d9]" viewBox="0 0 24 24"><path d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )

}

export default CandidateCard;