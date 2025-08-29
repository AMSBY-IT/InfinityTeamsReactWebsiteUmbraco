import axios from "axios";
import { toast } from "react-toastify";
import { Filters } from "../Types/types";

export const getAuthToken = (): string | null => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return null;
    }
    return token;
};

export const loginUser = async (username: string, password: string) => {
        const response = await axios.post(`https://vaibhavarora2-001-site16.dtempurl.com/api/auth/login`, { username, password });
        return response.data;
    
};

export const logOutUser = async (user:string) => {
  const token = getAuthToken();
    if (!token) return;
        const response = await axios.post(`https://vaibhavarora2-001-site16.dtempurl.com/api/auth/logout`, { "token":user },{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if(!response.data){
          toast.error("something went wrong")
          return
        }

        localStorage.removeItem('token');
        window.location.reload();
        return response.data;
    
};

const apiGet = async (url: string) => {
    const token = getAuthToken();
    if (!token) return;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data;
    } catch (error) {

        throw error;
    }
};

export const fetchTitle = () => apiGet("https://vaibhavarora2-001-site16.dtempurl.com/api/common/developer-tags");
export const fetchskills = () => apiGet("https://vaibhavarora2-001-site16.dtempurl.com/api/common/skills");
export const fetchcountries = () => apiGet("https://vaibhavarora2-001-site16.dtempurl.com/api/common/countries");
export const fetchlevels = () => apiGet("https://vaibhavarora2-001-site16.dtempurl.com/api/common/levels");





export const candidateFetch = async (filters:Filters) => {
  const token = getAuthToken();
  if (!token) return;
  
  // Build query parameters according to API format
  const params = new URLSearchParams();
  
  // Add pagination parameters (you might want to make these configurable)
  params.append('PageSize', filters.pageSize?.toString() || '10');
  params.append('PageIndex', filters.pageIndex?.toString() || '1');

  if (filters.minYearsOfExperience !== null && filters.minYearsOfExperience !== undefined) {
    params.append('MinYearsOfExperience', filters.minYearsOfExperience.toString());
  }
  
  if (filters.maxYearsOfExperience !== null && filters.maxYearsOfExperience !== undefined) {
    params.append('MaxYearsOfExperience', filters.maxYearsOfExperience.toString());
  }
  
  // Add skill GUIDs as individual parameters
  if (filters.skills && filters.skills.length > 0) {
    filters.skills.forEach((skill: string) => {
      params.append('skillGuidList', skill);
    });
  }
  
  // Add title GUIDs as individual parameters
  if (filters.titles && filters.titles.length > 0) {
    filters.titles.forEach((title: string) => {
      params.append('developerTagGuidList', title);
    });
  }
  
  // Add country GUIDs if needed (check your API documentation for the correct parameter name)
  if (filters.countries && filters.countries.length > 0) {
    filters.countries.forEach((country: string) => {
      params.append('countryGuidList', country); // Adjust parameter name as per your API
    });
  }

  if (filters.levels && filters.levels.length > 0) {
    filters.levels.forEach((level: string) => {
      params.append('levelGuidList', level);
    });
  }

  const url = `https://vaibhavarora2-001-site16.dtempurl.com/api/candidateslist?${params.toString()}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if(!response.data){
      return
    }
    return response.data.data;
   
};

export const getCandidateById = async (id: number)=>{
  const token = getAuthToken();
  if (!token) return;
  try {
            
            const response = await axios.get(`http://vaibhavarora2-001-site16.dtempurl.com/api/candidatedetail?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.data
            
        } catch (error) {
            throw error
        }
}