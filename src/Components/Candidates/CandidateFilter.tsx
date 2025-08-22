import { useContext, useEffect, useState} from "react"
import Select, { MultiValue } from 'react-select'
import { StylesConfig } from "react-select"
import { CandidateContext } from "../../Provider/CandidateContext"
import {Countries, Selected, Skill, Title} from "../../Types/types"
import { useQuery } from "@tanstack/react-query"
import { fetchcountries, fetchskills, fetchTitle } from "../../api/services"

export const CandidateFilter = () => {
    const {dispatch, title, skills, countries, filters} = useContext(CandidateContext);
    const [selectedTitle, setSelectedTitle] = useState<Selected[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<Selected[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Selected[]>([]);

    const { data:titleData } = useQuery({queryKey:['title'], queryFn:()=>fetchTitle()});
    const { data:skillData } = useQuery({queryKey:['skill'], queryFn:()=>fetchskills()});
    const { data:countryData} = useQuery({queryKey:['country'], queryFn:()=>fetchcountries()});

    // Define options inside the component
    const developerOptions = title.map((t:Title) => ({
        value: t.name,
        label: t.name,
        id: Number(t.id),
        guid: t.guid
    }));

    const skillOptions = skills.map((s:Skill) => ({
        value: s.name,
        label: s.name,
        id: Number(s.id),
        guid: s.guid
    }));

    const countryOptions = countries.map((c:Countries) => ({
        value: c.name,
        label: c.name,
        id: Number(c.id),
        guid: c.guid
    }));

    useEffect(() => {
        if (titleData) {
            dispatch({ type: "SET_TITLE", payload: titleData });
        }
    }, [titleData, dispatch]);

    useEffect(() => {
        if (skillData) {
            dispatch({ type: "SET_SKILLS", payload: skillData });
        }
    }, [skillData, dispatch]);

    useEffect(() => {
        if (countryData) {
            dispatch({ type: "SET_COUNTRY", payload: countryData });
        }
    }, [countryData, dispatch]);

    useEffect(() => {
        // Sync titles
        setSelectedTitle(developerOptions.filter(option => filters.titles.includes(option.guid)));

        // Sync skills
        setSelectedSkills(skillOptions.filter(option => filters.skills.includes(option.guid)));

        // Sync countries
        setSelectedCountries(countryOptions.filter(option => filters.countries.includes(option.guid)));
    }, [filters.titles, filters.skills, filters.countries, title, skills, countries]);

    const handleSelectChange = (selected: any, type: string) => {
        if (type === "titles") {
            setSelectedTitle(selected || []);
            const titleGuids = selected ? selected.map((option: Selected) => option.guid) : [];
            dispatch({ 
                type: "SET_FILTERS", 
                payload: {
                    ...filters,
                    titles: titleGuids,
                }
            });
        } else if (type === "skills") {
            setSelectedSkills(selected || []);
            const skillGuids = selected ? selected.map((option: Selected) => option.guid) : [];
            dispatch({ 
                type: "SET_FILTERS", 
                payload: {
                    ...filters,
                    skills: skillGuids,
                }
            });
        } else if (type === "countries") {
            setSelectedCountries(selected || []);
            const countryGuids = selected ? selected.map((option: Selected) => option.guid) : [];
            dispatch({ 
                type: "SET_FILTERS", 
                payload: {
                    ...filters,
                    countries: countryGuids,
                }
            });
        }
    };

    const customStyles: StylesConfig<Selected, true> = {
        control: (base) => ({
            ...base,
            border: 'none',
            boxShadow: 'none',
            background: 'transparent',
            minHeight: '32px',
            cursor: 'pointer',
            '&:hover': {
                border: 'none'
            }
        }),
        container: (base) => ({
            ...base,
            width: '-webkit-fill-available'
        }),
        placeholder: (base) => ({
            ...base,
            color: 'black',
            fontSize: '0.875rem'
        }),
        dropdownIndicator: (base) => ({
            ...base,
            padding: '0 4px'
        }),
        valueContainer: (base) => ({
            ...base,
            padding: '0 8px'
        }),
        input: (base) => ({
            ...base,
            margin: 0,
            padding: 0
        }),
        multiValueRemove: (base) => ({
            ...base,
            cursor: 'pointer',
            ':hover': {
                color: 'black'
            }
        })
    };

    return (
        <div className='tw-pt-6'>
            <div className='tw-max-w-7xl tw-mx-auto max-xl:tw-max-w-5xl'>
                <div className='tw-mx-auto max-sm:tw-w-11/12 max-lg:tw-w-11/12'>
                    <div className='tw-flex tw-justify-between tw-bg-white tw-rounded-md tw-border-[1px] max-lg:tw-flex-col'>
                        <div className="tw-flex tw-items-center tw-p-3 tw-justify-between tw-gap-4 tw-px-4 tw-grow max-lg:tw-flex-col max-lg:tw-py-4">
                            <div className="tw-flex tw-items-center tw-gap-2 tw-grow max-lg:tw-w-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='tw-w-5 tw-text-untitled-ui--primary600' viewBox="0 0 22 22">
                                        <path fill="#7f56d9" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
                                    </svg>
                                </div>
                                <Select
                                    options={developerOptions}
                                    placeholder="Add Keywords"
                                    isMulti
                                    styles={customStyles}
                                    value={selectedTitle}
                                    onChange={(selected) => handleSelectChange(selected, "titles")}
                                />
                            </div>

                            <div className="tw-h-full tw-w-px tw-bg-gray-200 max-lg:tw-hidden" />

                            <div className="tw-flex tw-items-center tw-gap-2 tw-grow max-lg:tw-w-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='tw-w-5' viewBox="0 0 22 22">
                                        <path fill="#7f56d9" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"/>
                                        <circle cx="12" cy="9" r="2.5" fill="#7f56d9"/>
                                    </svg>
                                </div>
                                <Select
                                    options={countryOptions}
                                    placeholder="All Countries"
                                    isMulti
                                    styles={customStyles}
                                    value={selectedCountries}
                                    onChange={(selected) => handleSelectChange(selected, "countries")}
                                />
                            </div>

                            <div className="tw-h-full tw-w-px tw-bg-gray-200 max-lg:tw-hidden" />

                            <div className="tw-flex tw-items-center tw-gap-2 tw-grow max-lg:tw-w-full">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='tw-w-5' viewBox="0 0 22 22">
                                        <g fill="none" stroke="#7f56d9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01"/>
                                            <path d="M3 13a20 20 0 0 0 18 0"/>
                                        </g>
                                    </svg>
                                </div>
                                <Select
                                    options={skillOptions}
                                    placeholder="Add Skills"
                                    isMulti
                                    styles={customStyles}
                                    value={selectedSkills}
                                    onChange={(selected) => handleSelectChange(selected, "skills")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};