import React, {  useReducer } from 'react';
import {
  Title,
  Skill,
  Countries,
  Levels,
  Candidates,
  CandidateProviderProps,
} from '../Types/types';
import { CandidateContext, initialState } from './CandidateContext';



export type Action =
  | { type: 'SET_LOGIN'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_TOKEN'; payload: string }
  | { type: 'SET_TITLE'; payload: Title[] }
  | { type: 'SET_SKILLS'; payload: Skill[] }
  | { type: 'SET_COUNTRY'; payload: Countries[] }
  | { type: 'SET_LEVEL'; payload: Levels[] }
  | { type: 'SET_CANDIDATES'; payload: Candidates[] }
  | { type: 'SET_CHECKED'; payload: { id: string; checked: boolean } }
  | { type: 'SET_FILTERS'; payload: { titles: string[]; 
    skills: string[]; 
    countries: string[]; 
    levels:string[];
    pageIndex:number;
    pageSize:number;
  minYearsOfExperience: number | null;
        maxYearsOfExperience: number| null; }};




const Reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return { ...state, isLogin: action.payload };
    case 'SET_ERROR':
      return { ...state, errorMessage: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload };
    case 'SET_COUNTRY':
      return { ...state, countries: action.payload };
    case 'SET_LEVEL':
      return { ...state, levels: action.payload };
    case 'SET_CANDIDATES':
      return { ...state, candidates: action.payload };
    case 'SET_CHECKED':
      return {
        ...state,
        isChecked: {
          ...state.isChecked,
          [action.payload.id]: action.payload.checked,
        },
      };
      case 'SET_FILTERS':
      return { 
        ...state, 
        filters: action.payload 
      };
    default:
      return state;
  }
};

export const CandidateProvider: React.FC<CandidateProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <CandidateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CandidateContext.Provider>
  );
};
