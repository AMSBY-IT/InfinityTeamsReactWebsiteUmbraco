import  { createContext } from 'react';
import {
  Title,
  Skill,
  Countries,
  Levels,
  Candidates,
  CandidateContextProps,
} from '../Types/types';


export const initialState = {
  isLogin: false,
  loading: false,
  errorMessage: '',
  token: '',
  title: [] as Title[],
  skills: [] as Skill[],
  countries: [] as Countries[],
  levels: [] as Levels[],
  candidates: [] as Candidates[],
  isChecked: {} as Record<string, boolean>,
  dispatch: ()=>{},
  filters: {
    titles: [] as string[],
    skills: [] as string[],
    countries: [] as string[],
    levels: [] as string[],
    pageIndex: 1,
    pageSize: 10,
    minYearsOfExperience: null,
    maxYearsOfExperience: null
  }
};

export const CandidateContext = createContext<
  CandidateContextProps
>(initialState);
