import { Dispatch, ReactNode } from "react";
import { Action } from "../Provider/CandidateProvider";



export interface CandidateContextProps {
    title: Title[];
    skills: Skill[];
    countries: Countries[];
    levels: Levels[];
    candidates: Candidates[];
    loading: boolean;
    isChecked: Record<string, boolean>;
    isLogin: boolean;
    errorMessage:string;
    token:string;
    dispatch: Dispatch<Action>;
    filters: Filters
    candidateById:Candidate
}

export interface Filters {
    titles: string[];
    skills: string[];
    countries: string[];
    levels: string[],
    pageIndex: number;
    pageSize: number;
    minYearsOfExperience: number | null;
  maxYearsOfExperience: number | null;
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

export interface Title {
    id: string;
    name: string
    guid: string;
}

export interface Skill {
    id: string;
    name: string
    guid: string;
}

export interface Countries {
    id: string;
    name: string
    guid: string;
}

export interface Levels {
    id: string;
    name: string
    guid: string;
}

export interface Candidates {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string
    email: string;
    phone: number;
    dateOfBirth: null;
    currentAddress: string;
    permanentAddress: string;
    gender: string;
    currentJobTitle: string;
    currentEmployer: string;
    yearsOfExperience: number;
    yearsOfRelevantExperience: number;
    previousJobTitle: string;
    previousEmployer: string;
    currentCTC: number;
    expectedCTC: number;
    dateOfAppointment: string;
    dateOfJoining: string;
    lastContactedDate: string;
    resumeFileName: string;
    // cctc:number;
    // communicationSkills:string;
    // contactNumber:string;
    // country:string;
    // currentCompanyName:string;
    currentMostRecentJobTitle:string;
    // cvUrl:string;
    // ectc:number;
    // emailAddress:string;
    // firstName:string;
    // gender:string;
    // id:number;
    // lastCompanyName:string;
    // lastContactedDate:string;
    // lastName:string;
    // locationCity:string;
    // sector:string;
    skills:string[];
    totalYearsOfExperience:string
}



export interface Selected {
    guid: string;
    id: number;
    label: string;
    value: string;
}

export interface Ischecked {
    id: string; 
    checked: boolean
}

export interface User {
    username: string;
    password: string
}

export interface Candidate {
  professionalDetails: {
    professionalDetailsAndSummary: string;
  }[];
  eductionDetails: {
    instituteName: string;
    location: string;
    degreeCertification: string;
    graduationYear: string;
    gradeCgpa: string;
  }[];
  workExperienceDetails: {
    companyName: string;
    levelOfExperience: string;
    designationDeveloperTag: string;
    experienceDetails: string;
  }[];
  certifications: {
    certificationName: string;
    certificationDate: string; // ISO Date string
    isCertificationValid: string; // "Yes" or "No"
    certificationGroup: string;
    notes: string;
  }[];
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  emailAddress: string;
  contactNumber: string;
  communicationSkills: string;
  currentCompanyName: string;
  lastCompanyName: string;
  sector: string;
  currentMostRecentJobTitle: string;
  totalYearsOfExperience: string;
  numberOfYearsInSpecific: string;
  locationCity: string;
  country: string;
  skills: string[];
  methodology: string[];
  tools: string[];
  candidateLevel: string[];
  cvUrl: string;
  otherAttachmentsUrl: string | null;
  cctc: number;
  ectc: number;
  ectcComment: string;
  noticePeriod: string;
  noticePeriodComment: string;
  remarks: string;
  interested: string; // "Yes" or "No"
  interestedComment: string;
  lastContactedDate: string; // ISO Date string
};


