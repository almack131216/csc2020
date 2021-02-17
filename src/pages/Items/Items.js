import React, { useEffect } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';
import NavLeft from '../../components/Sidebar/Navleft/NavLeft';
import BrandList from '../../components/Sidebar/BrandList/BrandList';
import { CB_Contact, CB_OpeningHours, CB_YouTubeBtn } from '../../components/ContactBoxes/ContactBoxes';
import InfoBox from '../../components/InfoBoxes/InfoBox/InfoBox';
import { useContext } from 'react';
import { ItemContext } from '../../Context';

const Items = (props) => {
	// console.log('[pages->Items]...')
	// INIT context
	const context = useContext(ItemContext);
	const { getDataItems, categoryArr } = context;
	// INIT category before anything
	const categoryName = props.category ? props.category : 'Live';
	// INIT appearance
	let catSettings = categoryArr.settings;
	let classContainer = [ 'container items', categoryName ];
	let widgetBrandList = null;
	let widgetYouTubeBtn = null;
	let widgetOpeningHours = null;
	let widgetContact = null;
	// FUNCTIONS
	let getBrandFromSlug = null;
	getBrandFromSlug = props.brand;
	
	// useEffect
	useEffect(
		() => {
			window.scrollTo(0, 0);
			// console.log('[pages>Items] useEffect() > getBrandFromSlug: ' + getBrandFromSlug);
			getDataItems(categoryName, getBrandFromSlug);
		},
		[ getDataItems, categoryName, getBrandFromSlug ]
	);
	// GET appearance
	if (catSettings) {
		catSettings.classContainer && classContainer.push(catSettings.classContainer);

		widgetBrandList = catSettings.showBrandList ? <BrandList /> : null;
		widgetYouTubeBtn = catSettings.showWidgetYouTubeBtn ? <InfoBox arr={CB_YouTubeBtn}/> : null;
		widgetOpeningHours = catSettings.showWidgetOpeningHours ? <InfoBox arr={CB_OpeningHours}/> : null;
		widgetContact = catSettings.showWidgetContactDetails ? <InfoBox arr={CB_Contact}/> : null;
	}
	// (END) GET appearance

	return (
		<div className={classContainer.join(' ')}>
			<section className="row">
				<div className="sidebar hidden-md-down col-md-3 padding-x-0">
					<NavLeft categoryName={categoryName} />
					{widgetBrandList}
					{widgetYouTubeBtn}
					{widgetOpeningHours}
					{widgetContact}
				</div>
				<div className="content col-sm-12 col-md-9 col-posts-parent 2do__cr">
					<ItemsContainer />
				</div>
			</section>
		</div>
	);
};

export default Items;
