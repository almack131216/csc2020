import React from "react";
import { Link } from "react-router-dom";
// import slugify from "react-slugify";
import AlphabetList from "./node_modules/react-alphabet-list";
const slugify = require('slugify');

const alphabetListCust = props => {
  return (
    <div className="alpha-list-wrap">
      <AlphabetList
        className="alpha-list"
        data={props.data}
        style={{height:'300px',width: '400px'}}
        generateFn={(item, index) => {
          return (
            <Link
              className="alphabet-list-tag small"
              key={index}
              to={{
                pathname: props.parentSlug + slugify(item, { lower: true }),
                state: {
                  fromCatalogue: true,
                  parentPage: props.parentSlug
                }
              }}
            >
              {item}
            </Link>
          );
        }}
      />
    </div>
  );
};

export default alphabetListCust;
