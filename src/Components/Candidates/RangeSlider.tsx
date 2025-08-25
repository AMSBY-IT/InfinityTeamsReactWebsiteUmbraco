import * as React from 'react';
import Slider from '@mui/material/Slider';
import { CandidateContext } from '../../Provider/CandidateContext';
import { useContext, useEffect } from 'react';


const DEFAULT_MIN = 0;
const DEFAULT_MAX = 15;
const minDistance = 0;

export default function MinimumDistanceSlider() {
     const { filters, dispatch } = useContext(CandidateContext);
  const [value, setValue] = React.useState<number[]>([
    filters.minYearsOfExperience !== null ? filters.minYearsOfExperience : DEFAULT_MIN, 
    filters.maxYearsOfExperience !== null ? filters.maxYearsOfExperience : DEFAULT_MAX
  ]);

  useEffect(() => {
        setValue([
            filters.minYearsOfExperience !== null ? filters.minYearsOfExperience : DEFAULT_MIN, 
            filters.maxYearsOfExperience !== null ? filters.maxYearsOfExperience : DEFAULT_MAX
        ]);
    }, [filters.minYearsOfExperience, filters.maxYearsOfExperience]);

  const handleChange = (_: Event, newValue: number[], activeThumb: number) => {
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const handleChangeCommitted = (_: Event | React.SyntheticEvent, newValue: number[]) => {
    
    // Check if values are at default (user hasn't changed from initial state)
    const isMinDefault = newValue[0] === DEFAULT_MIN;
    const isMaxDefault = newValue[1] === DEFAULT_MAX;
    
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        ...filters,
        minYearsOfExperience: isMinDefault ? null : newValue[0],
        maxYearsOfExperience: isMaxDefault ? null : newValue[1]
      }
    });
  };

  return (
    <div className='tw-w-full tw-pt-5 tw-flex tw-items-center tw-flex-col tw-justify-center'>
      <div className='tw-flex tw-justify-start tw-items-center tw-pb-1 tw-w-full tw-capitalize tw-text-lg tw-font-medium tw-cursor-pointer tw-text-[#242121]'>
        Experience in Years
      </div>
      <div className='tw-w-4/5 tw-pt-3'>
        <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="off"
        disableSwap
        min={DEFAULT_MIN}
        max={DEFAULT_MAX}
        step={0.1}
      />

      <div className="tw-flex tw-justify-between tw-mt-2 tw-text-sm tw-text-gray-600">
        <span>Min years:{value[0]}</span>
        <span>Max years:{value[1]}</span>
      </div>
      </div>
    </div>
  );
}
