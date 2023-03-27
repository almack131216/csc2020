import React, { useEffect } from 'react';
import SEO from "../../components/SEO/SEO";
import ItemsContainer from '../../containers/ItemsContainer';
import BrandList from '../../components/Sidebar/BrandList/BrandList';
import { CB_Contact, CB_OpeningHours, CB_YouTubeBtn } from '../../components/ContactBoxes/ContactBoxes';
import InfoBox from '../../components/InfoBoxes/InfoBox/InfoBox';
import { useContext } from 'react';
import { ItemContext } from '../../Context';

const Items = (props) => {
	// console.log('[pages->Items]...')
	// INIT context
	const context = useContext(ItemContext);
	const { getDataItems, categoryArr, subcategoryArr } = context;
	// INIT category before anything
	const categoryName = props.category ? props.category : 'Live';
	// INIT appearance
	let catSettings = categoryArr.settings;
	let classContainer = [ 'container items', categoryName ];
	let widgetBrandList = null;
	let widgetYouTubeBtn = null;
	let widgetOpeningHours = null;
	let widgetContact = null;
	let metaTitle = subcategoryArr && subcategoryArr.brand ? subcategoryArr.brand + ' | ' + categoryArr.title : categoryArr.title;
	
	// FUNCTIONS
	let getBrandFromSlug = props.brand ? props.brand : null;
	let getPage = props.page ? props.page : null;
	
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
		<>
		<SEO
			title={metaTitle}
			type="product.group"
		/>
		<div className={classContainer.join(' ')}>
			<section className="row">
				<div className="col-sm-12 col-md-9">
					<ItemsContainer page={getPage} />
				</div>
				<div className="sidebar hidden-md-down col-md-3">
					{widgetBrandList}
					{widgetYouTubeBtn}
					{widgetOpeningHours}
					{widgetContact}
				</div>
			</section>
		</div>
		</>
	);
};

export default Items;
