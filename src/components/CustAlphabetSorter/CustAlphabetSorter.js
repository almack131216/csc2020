import React from "react";
import { Link } from "react-router-dom";
import AlpabetSorter from 'react-alphabet-sorter'
const slugify = require('slugify');



const alphabetSorterCust = props => {

  const handleSorter = (selected) => {
    console.log(selected)
  }

  return (
    <div className="as-items-wrap">
      <AlpabetSorter
          asGroup={props.data}
          asName='usage_example'
          type='link'
          handleCheck={handleSorter} />
      
    </div>
  );
};

export default alphabetSorterCust;
