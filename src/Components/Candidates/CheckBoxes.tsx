import { useContext, useEffect } from 'react';
import { CandidateContext } from '../../Provider/CandidateContext';
import { Levels } from '../../Types/types';
import { useQuery } from '@tanstack/react-query';
import { fetchlevels } from '../../api/services';

const CheckBoxes = () => {
  const { levels, isChecked, dispatch, filters } = useContext(CandidateContext);
  // const [isDropdownOpen, setDropdownOpen] = useState<boolean>(true);

  useEffect(() => {
        levels.forEach((item: Levels) => {
            const shouldBeChecked = filters.levels.includes(item.guid);
            if (isChecked[item.guid] !== shouldBeChecked) {
                dispatch({
                    type: 'SET_CHECKED',
                    payload: { id: item.guid, checked: shouldBeChecked }
                });
            }
        });
    }, [filters.levels, levels, isChecked, dispatch]);

  const { data: levelData } = useQuery({
    queryKey: ['level'],
    queryFn: () => fetchlevels(),
  });

  useEffect(() => {
    if (levelData) {
      dispatch({ type: 'SET_LEVEL', payload: levelData });
    }
  }, [levelData, dispatch]);

  const toggleChecked = (guid: string) => {
    const newCheckedState = !isChecked[guid];
    
    dispatch({
      type: 'SET_CHECKED',
      payload: { id: guid, checked: newCheckedState },
    });

    

    // Get the current level GUIDs from filters
    const currentLevelGuids = filters.levels || [];
    
    if (newCheckedState) {
      // Add this level to filters
      dispatch({
        type: 'SET_FILTERS',
        payload: {
          ...filters,
          levels: [...currentLevelGuids, guid],
        },
      });
    } else {
      // Remove this level from filters
      dispatch({
        type: 'SET_FILTERS',
        payload: {
          ...filters,
          levels: currentLevelGuids.filter(g => g !== guid),
        },
      });
    }
  };

  // const toggleDropdown = () => {
  //   setDropdownOpen((prev) => !prev);
  // };

  return (
    <div className='tw-flex tw-flex-col'>
      <div className=''>
        <div className='tw-flex tw-flex-col tw-gap-8'>
          <div className='search__item'>
            <div
              className='tw-flex tw-justify-between tw-items-center tw-pb-1 tw-capitalize tw-text-lg tw-font-medium tw-cursor-pointer tw-text-[#242121] experience-label'
              // onClick={toggleDropdown}
            >
              Experience Level
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`tw-w-6 ${isDropdownOpen ? 'tw-rotate-180' : ''}`}
                viewBox='0 0 24 24'
              >
                <path
                  fill='#000'
                  d='M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062'
                />
              </svg> */}
            </div>
            {/* {isDropdownOpen && ( */}
              <div className='search__item__list' id='chkbxLevels'>
                {levels.map((item: Levels) => {
                  return (
                    <div className='tw-flex tw-items-center tw-py-1' key={item.id}>
                      <div
                        className='tw-text-base tw-font-normal tw-flex tw-items-center tw-cursor-pointer'
                        onClick={() => toggleChecked(item.guid)} // Use item.guid here
                      >
                        <input 
                          type='checkbox' 
                          className='tw-hidden group' 
                          checked={isChecked[item.guid] || false} // Use item.guid here
                          readOnly
                        />
                        <span
                          id={item.guid} // Use item.guid here
                          className={`tw-w-[16px] tw-h-[16px] tw-border tw-border-[#c8c9d0] tw-rounded-[2px] tw-mr-[10px] tw-inline-block tw-relative ${
                            isChecked[item.guid] // Use item.guid here
                              ? 'tw-bg-untitled-ui--primary800 tw-border-untitled-ui--primary800'
                              : 'tw-bg-transparent'
                          }`}
                        >
                          <span
                            className={`tw-absolute  tw-left-[4px] tw-w-[6px] tw-h-[10px] tw-border-white tw-border-r-[2px] tw-border-b-[2px] tw-rotate-45 ${
                              isChecked[item.guid] ? 'tw-block' : 'tw-hidden' // Use item.guid here
                            }`}
                          ></span>
                        </span>
                        <label className='tw-cursor-pointer tw-font-normal tw-text-untitled-ui--gray800'>
                          {item.name}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxes;