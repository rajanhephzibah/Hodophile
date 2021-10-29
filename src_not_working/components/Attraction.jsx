import React from 'react';
import AttractionItem from './AttractionItem.jsx';

function Attraction ({attrItems, handleAttrItemState}) {


  if (attrItems.length > 0) {
    return(
         <div>
           { attrItems.map((item,index) => <AttractionItem attrItemEntry = {item} key = {index} handleAttrItemState={handleAttrItemState} />)}
         </div>
       )
  } else {
    return (
      <h3 className = 'glyphicon glyphicon-camera'></h3>
    )
  }


}

export default Attraction;
