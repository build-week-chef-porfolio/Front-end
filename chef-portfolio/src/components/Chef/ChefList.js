import React from 'react';
import ChefCard from './ChefCard';
import SingleHeader from '../Header/SingleHeader';
import SingleMainMenu from '../Menu/SingleMenu';
import ChefDropdownFilterSearchInMenu from './ChefFilter';

const ChefList = (props) => {
  const chefsData = props.chefsData;
  const onSearch = props.onSearch;
  // const queryData = props.queryData;

  return (
    <>
    <div className="singleheaderWrapper">
      <SingleMainMenu />
      <div className='single-recipes-filter'>
        <ChefDropdownFilterSearchInMenu onSearch={onSearch} chefsData={chefsData} />
      </div>
      <h2>Your search results....</h2>
    </div>
    <div className='singleChefCardWrapper'>     
      {chefsData.map(chefData => {
        return <ChefCard 
          key={chefData.id}
          chefData={chefData}
        />
      })}
    </div>
    </>
  )
}

export default ChefList;
