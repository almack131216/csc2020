import React from "react";
import { Link } from "react-router-dom";
// const slugify = require('slugify');

const alphabetList = props => {

  const azList = props.data.map((item,index) => {
    console.log('[AlphabetList] item = ' + item);
    return <li key={index} className={item.char ? 'is-char' : ''}>
      {item.href ? <Link to={item.href}>{item.label}</Link> : item.label}
      </li>
  })

  return (
    <div className="alpha-list-wrap">
      <ul>
      {azList ? azList : 'Loading...'}
      </ul> 
    </div>
  );
};

export default alphabetList;
