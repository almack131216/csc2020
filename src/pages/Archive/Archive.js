import React, { useEffect, useState } from "react";
import NavLeft from '../../components/Sidebar/Navleft/NavLeft';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AlphabetList from "../../components/AlphabetList/AlphabetList"
// import CustAlphabetSorter from "../../components/CustAlphabetSorter/CustAlphabetSorter";
import { CB_Contact, CB_OpeningHours } from '../../components/ContactBoxes/ContactBoxes';
import InfoBox from '../../components/InfoBoxes/InfoBox/InfoBox';
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";
// import { useContext } from 'react';
// import { ItemContext } from '../../Context';

const Archive = props => {

  // ConsoleLog('[pages->Items]...')
	// INIT context
	// const context = useContext(ItemContext);
	// const { categoryArr } = context;
	// INIT category before anything
	const categoryName = 'Archive';
	// INIT appearance
	let classContainer = [ 'container items', 'a-z' ];
  // FUNCTIONS

  // const [brandsArr, setBrandsArr] = useState([]);
  const [brandsArrLite, setBrandsArrLite] = useState([]);
  const [loading, setLoading] = useState(true);

  // SET breadcrumbs array
  let crumbsArr = [];
  let categorAboutArr = {
    title: "Classic Cars Sold",
    slug: "/classic-cars-sold"
  };
  crumbsArr.push(categorAboutArr);
  let crumbAll = {
    title: "Archive",
    slug: "/sold"
  };
  crumbsArr.push(crumbAll);

  const breadcrumbsTag = (
    <Breadcrumbs crumbsArr={crumbsArr} pageType="item-details" />
  );

  // Widgets
  const widgetOpeningHours = <InfoBox arr={CB_OpeningHours} />;
	const widgetContact = <InfoBox arr={CB_Contact} />;

  const apiUrlRelated = `${process.env.REACT_APP_API_ENDPOINT}?api=brands`;

	// useEffect
	useEffect(
		() => {
			// window.scrollTo(0, 0);
      setDocumentTitle('Classic Cars Sold (all)');   
      
      const fetchItems = async () => {
        setLoading(true);
        await fetch(apiUrlRelated)
          .then(response => response.json())
          .then(data => {
            ConsoleLog("[Archive] useEffect() > fetchItems() > data: " + data);
            let [...getBrandsArr] = [...data];
            ConsoleLog("[Archive] useEffect() > fetchItems() > getBrandsArr: " + getBrandsArr);
            let getBrandsArrLite = [];
            let letters = [];
            let char = null;
            for(let i = 0;i < getBrandsArr.length; i++){
              char = getBrandsArr[i].brand[0].toLowerCase();
              if(!letters.includes(char)){
                letters.push(char);
                getBrandsArrLite.push({value: 1, label: char, char: true});
              }
              getBrandsArrLite.push({value: getBrandsArr[i].id, label: `${getBrandsArr[i].brand} (${getBrandsArr[i].itemCount})`, href: `${getBrandsArr[i].slug}/sold`});
            }
            // getBrandsArr.map((item, index) => {
            //   letters.indexOf('a') === -1 ? letters.push('a');
            //   getBrandsArrLite.push({value: item.id, label: item.brand})
            // });
            ConsoleLog("[ItemRelated] useEffect() > getBrandsArrLite: " + getBrandsArrLite);
            // setBrandsArr(getBrandsArr);
            setBrandsArrLite(getBrandsArrLite);
            setLoading(false);
          });
      };
      fetchItems();
  }, [apiUrlRelated]);

  // const [items, setItems] = useState([]);

  

	return (
		<div className={classContainer.join(' ')}>
			<section className="row">
				<div className="sidebar hidden-md-down col-md-3 padding-x-0">
					<NavLeft categoryName={categoryName} />
          {widgetOpeningHours}
					{widgetContact}
				</div>
				<div className="content col-sm-12 col-md-9 col-posts-parent">
            {breadcrumbsTag}
            <div className="col-post-text">
              <h1>Archive: 2007-today</h1>      
              <h2>Selling classic cars worldwide for over 25 years</h2>
              {/* <h3>Our online archive dates from 2007</h3> */}
              {brandsArrLite && !loading ? <AlphabetList data={brandsArrLite}></AlphabetList> : 'Loading...'}
              {/* {brandsArrLite ? <CustAlphabetSorter data={brandsArrLite}></CustAlphabetSorter> : 'Loading...'} */}
              {/* {brandsArrLite ? <CustAlphabetList data={brandsArrLite} parentSlug={''} /> : null } */}
              {/* <div className="alpha-list-wrap">
              <div className="alpha-list">
              <ul>
              {
                brandsArr ? brandsArr.map((item, index) => {
                  return <li key={index}><Link>{item.brand}</Link> ({item.itemCount})</li>
                }) : null
              }
              </ul>
              </div>
              </div> */}
            </div>					
				</div>
			</section>
		</div>
	);
};

export default Archive;
