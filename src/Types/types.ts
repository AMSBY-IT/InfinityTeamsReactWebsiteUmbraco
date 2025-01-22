import { ReactNode } from "react";
import { MultiValue } from "react-select"


export interface CandidateContextProps {
    title:Title[];
    skill: Skill[];
    countries: Countries[];
    levels: Levels[];
    candidates: Candidates[];
    currentPage: number;
    totalPage: number;
    total: number;
    pagesize: number;
    loading: boolean;
    skillIds:string[];
    developertagIds:string[];
    levelIds:string[];
    countryIds:string;
    prevClick: () => void;
    nextClick: () => void;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setSkillIds: React.Dispatch<React.SetStateAction<string[]>>;
    setDevelopertagIds: React.Dispatch<React.SetStateAction<string[]>>;
    setLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
    setCountryIds: React.Dispatch<React.SetStateAction<string>>;
    isChecked:{[id:number]:boolean};
    setChecked:React.Dispatch<React.SetStateAction<{[id:number]:boolean}>>;
    selectedTitle:MultiValue<Selected>;
    setSelectedTitle:React.Dispatch<React.SetStateAction<MultiValue<Selected>>>;
    selectedCountries:MultiValue<Selected>;
    setSelectedCountries:React.Dispatch<React.SetStateAction<MultiValue<Selected>>>;
    selectedSkills:MultiValue<Selected>;
    setSelectedSkills:React.Dispatch<React.SetStateAction<MultiValue<Selected>>>;
    isLogin:boolean;
    setLogin:React.Dispatch<React.SetStateAction<boolean>>;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
    setCandidates:React.Dispatch<React.SetStateAction<Candidates[]>>;
    setTotalPage:React.Dispatch<React.SetStateAction<number>>;
    setTotal:React.Dispatch<React.SetStateAction<number>>;
    setPageSize:React.Dispatch<React.SetStateAction<number>>;
    setTitle:React.Dispatch<React.SetStateAction<Title[]>>;
    setSkills:React.Dispatch<React.SetStateAction<Skill[]>>;
    setCountries:React.Dispatch<React.SetStateAction<Countries[]>>;
    setLevels:React.Dispatch<React.SetStateAction<Levels[]>>;
}

export interface CandidateProviderProps {
    children: ReactNode;
}

export interface FetchCandidatesParams {
    page?: number;
    limit?: number;
    skillGuids?: string[];
    developerTagGuids?: string[];
    levelGuids?: string[];
    countryGuid?: string;
}

export interface Title{
    guid:string;
    id:number;
    name:string
}

export interface Skill{
    guid:string;
    id:number;
    name:string
}

export interface Countries{
    guid:string;
    id:number;
    name:string
}

export interface Levels{
    experienceRangeEnd:number;
    experienceRangeStart:number;
    guid:string;
    id:number;
    name:string
}

export interface Candidates {
    cctc:number;
    communicationSkills:string;
    contactNumber:string;
    country:string;
    currentCompanyName:string;
    currentMostRecentJobTitle:string;
    cvUrl:string;
    ectc:number;
    emailAddress:string;
    firstName:string;
    gender:string;
    id:number;
    lastCompanyName:string;
    lastContactedDate:string;
    lastName:string;
    locationCity:string;
    sector:string;
    skills:string[];
    totalYearsOfExperience:string
}

export interface Selected {
    guid:string;
    id:number;
    label:string;
    value:string; 
}

export interface Ischecked {
    [id:number]:boolean
}

export interface User {
    username:string;
    password:string
}

