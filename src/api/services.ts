import axios from "axios";

export const loginUser = async (username: string, password: string) => {
        const response = await axios.post(`https://vaibhavarora2-001-site16.dtempurl.com/api/auth/login`, { username, password });
        return response.data;
    
};


// export const fetchCandidates = async(requestModel:any)=>{
//         const token = localStorage.getItem("token");
//         if (!token) {
//             console.error("No token found");
//             return;
//         }
        
        

//         const queryParams = new URLSearchParams({
//             request: JSON.stringify(requestModel)
//         }).toString();

//         const url = `${API_URL}/umbraco/surface/candidatelistsurface/getcandidates?${queryParams}`


        
//         try{
//             const response= await axios.get(url
//                 ,{
//                 headers:{
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         )
//         return response.data.data
            
//         }catch(err){
//             throw(err)
//         }
//     }


// export const fetchDeveloperTags = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found.");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getdevelopertags`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

// export const fetchSkills = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getskills`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

// export const fetchCountries = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getcountries`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

// export const fetchLevels = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         console.error("No token found");
//         return;
//     }
//     try {
//         const response = await axios.get(`${API_URL}/umbraco/surface/common/getlevels`
//             ,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         );
//         return response.data.data;
//     } catch (err) {
//         throw(err)
//     }
// };

export const fetchTitle = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found fetchtitle.");
        return;
    }
        const response = await axios.get(`https://vaibhavarora2-001-site16.dtempurl.com/api/common/developer-tags`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};

export const fetchskills = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`https://vaibhavarora2-001-site16.dtempurl.com/api/common/skills`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};

export const fetchcountries = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`https://vaibhavarora2-001-site16.dtempurl.com/api/common/countries`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};

export const fetchlevels = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error("No token found.");
        return;
    }
        const response = await axios.get(`https://vaibhavarora2-001-site16.dtempurl.com/api/common/levels`
            ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        );
        return response.data.data;
};


export const candidateFetch = async (filters: any) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found.");
    return;
  }
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
  
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.data;
  } catch(err) {
    throw(err);
  }
};