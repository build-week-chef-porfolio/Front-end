import React from 'react';
import ChefCard from './ChefCard';

const ChefList = (props) => {
  const chefsData = props.chefsData;
  return (
    <div className='chefs-list'>
      {chefsData.map(chefData => {
        return <ChefCard 
          key={chefData.id}
          chefData={chefData}
        />
      })}
    </div>
  )
}

export default ChefList;
