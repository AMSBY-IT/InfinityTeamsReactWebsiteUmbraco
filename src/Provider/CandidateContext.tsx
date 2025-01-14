import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { MultiValue } from "react-select"
import { Title,Skill,Countries,Levels,Candidates,CandidateProviderProps,CandidateContextProps,Ischecked,Selected } from "../Types/types";


export const CandidateContext = createContext<CandidateContextProps | undefined>(undefined);


export const CandidateProvider: React.FC<CandidateProviderProps>  = ({ children }) => {
    const [title, setTitle] = useState<Title[]>([]);
    const [skill, setSkills] = useState<Skill[]>([]);
    const [countries, setCountries] = useState<Countries[]>([]);
    const [levels, setLevels] = useState<Levels[]>([]);
    const [candidates, setCandidates] = useState<Candidates[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [pagesize, setPageSize] = useState<number>(12);
    const [skillIds, setSkillIds] = useState<string[]>([]);
    const [developertagIds, setDevelopertagIds] = useState<string[]>([]);
    const [levelIds, setLevelIds] = useState<string[]>([]);
    const [countryIds, setCountryIds] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isChecked, setChecked] = useState<Ischecked>({});
    const [selectedTitle,setSelectedTitle]=useState<MultiValue<Selected>>([]);
    const [selectedCountries,setSelectedCountries]=useState<MultiValue<Selected>>([]);
    const [selectedSkills,setSelectedSkills]=useState<MultiValue<Selected>>([])
    
    const fetchCandidates = async({
        page =currentPage,
        limit = 12,
        skillGuids=skillIds,
        developerTagGuids=developertagIds,
        levelGuids=levelIds,
        countryGuid=countryIds
    })=>{
        const requestModel = {
            pageIndex: page,
            pageSize: limit,
            skillGuidList: skillGuids,
            developerTagGuidList: developerTagGuids,
            levelGuidList: levelGuids,
            countryGuid: countryGuid
        };

        const queryParams = new URLSearchParams({
            request: JSON.stringify(requestModel)
        }).toString();

        const url = `https://vaibhavarora2-001-site16.dtempurl.com/umbraco/surface/candidatelist/getcandidates?${queryParams}`

        setLoading(true)
        
        try{
            
            const response= await axios.get(url)
            const {items,pageIndex,pageSize,totalCount,totalPages}=response.data.data
            setCandidates(items)
            setTotalPage(totalPages)
            setCurrentPage(pageIndex)
            setTotal(totalCount)
            setPageSize(pageSize)
        }catch(err){
            console.log("error fetching candidates:",err)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchCandidates({
            page: currentPage,
            limit: pagesize,
            skillGuids: skillIds,
            developerTagGuids: developertagIds,
            levelGuids: levelIds,
            countryGuid: countryIds,
        })
    },[currentPage,pagesize,skillIds,developertagIds,levelIds,countryIds])
    
    const prevClick = ()=>{
        if(currentPage > 0){
            setCurrentPage((prev)=>prev-1)
        }
    }

    const nextClick = ()=>{
        if(currentPage < totalPage){
            setCurrentPage((prev)=>prev+1)
        }
    }

    
    const fetchDeveloperTags = async () => {
        try {
            const response = await axios.get("https://vaibhavarora2-001-site16.dtempurl.com/umbraco/surface/common/getdevelopertags");
            setTitle(response.data.data);
        } catch (err) {
            console.error("Error fetching developer tags:", err);
        }
    };

    const fetchSkills = async () => {
        try {
            const response = await axios.get("https://vaibhavarora2-001-site16.dtempurl.com/umbraco/surface/common/getskills");
            setSkills(response.data.data);
        } catch (err) {
            console.error("Error fetching skills:", err);
        }
    };

    const fetchCountries = async () => {
        try {
            const response = await axios.get("https://vaibhavarora2-001-site16.dtempurl.com/umbraco/surface/common/getcountries");
            setCountries(response.data.data);
        } catch (err) {
            console.error("Error fetching countries:", err);
        }
    };

    const fetchLevels = async () => {
        try {
            const response = await axios.get("https://vaibhavarora2-001-site16.dtempurl.com/umbraco/surface/common/getlevels");
            setLevels(response.data.data);
        } catch (err) {
            console.error("Error fetching levels:", err);
        }
    };

   
    useEffect(() => {
        fetchDeveloperTags();
        fetchSkills();
        fetchCountries();
        fetchLevels();
    }, []);

    
    return (
        <CandidateContext.Provider
            value={{
                title,
                skill,
                countries,
                levels,
                candidates,
                currentPage,
                totalPage,
                total,
                pagesize,
                prevClick,
                nextClick,
                setCurrentPage,
                setSkillIds,
                setDevelopertagIds,
                setLevelIds,
                setCountryIds,
                loading,
                isChecked,
                setChecked,
                selectedTitle,
                setSelectedTitle,
                selectedCountries,
                setSelectedCountries,
                selectedSkills,
                setSelectedSkills
            }}
        >
            {children}
        </CandidateContext.Provider>
    );
};
