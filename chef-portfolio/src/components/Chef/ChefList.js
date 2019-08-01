import React from 'react';
import ChefCard from './ChefCard';
import SingleHeader from '../Header/SingleHeader';
import SingleMainMenu from '../Menu/SingleMenu';

const ChefList = (props) => {
  const chefsData = props.chefsData;
  return (
    <>
    <div className="singleheaderWrapper">
          <SingleMainMenu />
          <h2>Your search results</h2>
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
