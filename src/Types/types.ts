import { ReactNode } from "react";


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
    prevClick: () => void;
    nextClick: () => void;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setSkillIds: React.Dispatch<React.SetStateAction<string[]>>;
    setDevelopertagIds: React.Dispatch<React.SetStateAction<string[]>>;
    setLevelIds: React.Dispatch<React.SetStateAction<string[]>>;
    setCountryIds: React.Dispatch<React.SetStateAction<string>>;
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
