import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import SiteData from './assets/_data/_data';
import CatData from './assets/_data/_data-categories';
import SortFilterRangeData from './assets/_data/_data-filter-sort';
import { setDocumentTitle, getDateToday, getExcerpt, apiGetItems, ConsoleLog } from './assets/js/Helpers';
const slugify = require('slugify');
const ItemContext = React.createContext();
//
export default class ItemProvider extends Component {
	state = {
		dateToday: getDateToday(),
		siteData: SiteData,
		catData: CatData,
		items: [],
		filterIsActive: false,
		categoryName: null,
		categoryNameDefault: 'Live',
		categoryArr: {},
		brandArr: [],
		sortedItems: [],
		featuredItems: [],
		featuredItemsArchive: [],
		loading: true,
		brand: 'all',
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		maxPriceInit: 0,
		minYear: 0,
		minYearInit: 0,
		maxYear: 0,
		maxYearInit: 0,
		priceRangeArr: [],
		sortBy: 'DateDesc',
		sortByArr: {},
		sortRangeArr: []
	};

	/////////////////////////////////////////////////////////////////////////// GET data (homepage)
	// Get data from API to show on the homepage
	getData = async (getPageName) => {
		if (!getPageName) return;

		try {
			this.setState({ loading: true });
			const data = await fetch(CatData[this.state.categoryNameDefault].apiFeatured).then((data) => data.json());
			const dataArchive = await fetch(CatData.Archive.apiFeatured).then((dataArchive) => dataArchive.json());
			const dataOther = await fetch(CatData.General.apiFeatured).then((dataOther) => dataOther.json());

			let items = this.formatData(data);
			let itemsArchive = this.formatData(dataArchive);
			let itemsOther = this.formatData(dataOther);
			// ConsoleLog("[Context] getData > items..." + items);

			//////////////
			// FEATURED //
			//////////////
			// Featured items [Live]
			let featuredItems = items.slice(0, SiteData.featuredItems.itemCount); // get first # items from main array
			// Featured items [Archive]
			let featuredItemsArchive = itemsArchive.slice(0, SiteData.featuredItems.itemCount);
			let featuredItemsNews = itemsOther.slice(2, 4);
			let featuredItemsTestimonials = itemsOther.slice(0, 2);
			ConsoleLog('[Context] featuredItemsNews: ' + featuredItemsNews);

			///////////////
			// SET STATE //
			///////////////
			this.setState({
				featuredItems,
				featuredItemsArchive,
				featuredItemsNews,
				featuredItemsTestimonials,
				loading: false
			});
		} catch (error) {
			console.log('[Context] getData > error: ' + error);
		}
	};
	// (END) getData

	/////////////////////////////////////////////////////////////////////////// GET data (items)
	// Get data from API to show on the items page(s)
	// accept category and status parameter to determine api call
	getDataItems = async (getCategoryName, getBrandSlug) => {
		ConsoleLog('[Context] getDataItems() > getCategoryName: ' + getCategoryName);
		ConsoleLog('[Context] getDataItems() > getBrandSlug: ' + getBrandSlug);

		try {
			this.setState({ loading: true });
			let apiArr = {
				base: CatData[getCategoryName].api,
				brandName: getBrandSlug !== "all" ? getBrandSlug : null
			}

			const data = await fetch(apiGetItems(apiArr), {
				method: 'GET'
			}).then((data) => data.json());

			const categoryName = getCategoryName; // ? getCategoryName : null;
			const statusId = categoryName === 'Archive' ? 2 : 1;
			const brandSlug = getBrandSlug ? getBrandSlug : null; // status determines Live or Archive

			let allItems = this.formatData(data);
			let items = allItems;
			let sortedItems = [];

			let brand = null;
			let subcategoryArr = {};
			if (brandSlug) {
				subcategoryArr = allItems.find((x) => x.subcategoryArr.slug === brandSlug).subcategoryArr;
				brand = subcategoryArr.id;
				ConsoleLog('[Context] brandSlug received...' + brand);
				sortedItems = allItems.filter((item) => item.subcategoryArr.slug === brandSlug);
			} else {
				sortedItems = allItems;
			}
			// ConsoleLog("[Context] getDataItems > items..." + items);

			////////////
			// FILTER // properties based on items
			////////////
			// Price (2 dropdowns)
			let minPrice = 0; //Math.min(...items.map(item => item.price));
			let maxPrice = Math.max(...items.map((item) => item.price));
			const maxPriceInit = Math.round((maxPrice / 100000).toFixed() * 100000);
			const priceRangeArr = SiteData.priceRangeArr; // [0, 5000, 10000, ...]
			// Year (2 numeric inputs)
			let minYear = Math.min(...items.map((item) => item.year));
			let maxYear = Math.max(...items.map((item) => item.year));
			const minYearInit = minYear;
			const maxYearInit = maxYear;
			// Brand (dropdown)
			const brandArr = this.setBrandArr(items);
			const categoryArr = this.getCategoryArr(categoryName, statusId);
			setDocumentTitle(categoryArr.title);
			//////////
			// SORT // options based on items page type
			//////////
			// Sort (dropdown)
			let sortRangeArr = [];
			sortRangeArr.push(SortFilterRangeData.DateDesc);
			sortRangeArr.push(SortFilterRangeData.DateAsc);
			// CONDITION: Only show price option for Live pages
			if (categoryName === 'Live') {
				sortRangeArr.push(SortFilterRangeData.PriceDesc);
				sortRangeArr.push(SortFilterRangeData.PriceAsc);
			}
			// CONDITION: Only show Years option for Live/Archive pages
			sortRangeArr.push(SortFilterRangeData.YearDesc);
			sortRangeArr.push(SortFilterRangeData.YearAsc);
			// ConsoleLog("[Context] sortRangeArr..." + sortRangeArr);
			const sortByArr = sortRangeArr[0];
			const sortBy = sortByArr.name;

			///////////////
			// SET STATE //
			///////////////
			this.setState({
				items,
				categoryName,
				categoryArr,
				subcategoryArr,
				brand,
				brandArr,
				sortedItems,
				loading: false,
				price: maxPrice,
				minPrice,
				maxPrice: maxPriceInit,
				maxPriceInit,
				minYear,
				minYearInit,
				maxYear,
				maxYearInit,
				priceRangeArr,
				sortBy,
				sortByArr,
				sortRangeArr
			});
		} catch (error) {
			console.log('[Context] getDataItems() > error...');
			console.log(error);			
		}
	};
	// (END) getDataItems

	componentDidMount() {
		// ConsoleLog(
		//   "[Context] componentDidMount()... category = " +
		//     this.state.categoryName
		// );
	}

	componentDidUpdate() {
		ConsoleLog(
			'[Context] componentDidUpdate() > categoryName: '
			+ this.state.categoryName
			+ ' | brand = ' + this.state.brand
		);
	}

	/////////////////////////////////////////////////////////////////////////// SET brand array (items)
	setBrandArr = (myObj) => {
		const myArr = { list: myObj }; //put obj array into list for flatMap
		const myUniqueBrandList = myArr.list
			.flatMap((obj) => obj.subcategoryArr)
			.filter((e, i, a) => a.findIndex(({ id, brand }) => id === e.id && brand === e.brand) === i);

		// SORT alphabetically [A-Z]
		myUniqueBrandList.sort(function(a, b) {
			var nameA = a.brand.toLowerCase(),
				nameB = b.brand.toLowerCase();
			if (nameA < nameB)
				//sort string ascending
				return -1;
			if (nameA > nameB) return 1;
			return 0; //default return value (no sorting)
		});

		// COUNT items in subcategory
		let myUniqueBrandListWithCount = this.countItemsInBrand(myUniqueBrandList, myObj);
		myUniqueBrandListWithCount = [
			{ id: 'all', brand: 'ALL', slug: 'classic-cars-for-sale', itemCount: myObj.length },
			...myUniqueBrandListWithCount
		];
		ConsoleLog('[Context] myUniqueBrandList...' + myUniqueBrandListWithCount);
		return myUniqueBrandListWithCount;
	};

	/////////////////////////////////////////////////////////////////////////// COUNT items in each brand
	countItemsInBrand(getBrandArr, getItemsArr) {
		for (let i = 0; i < getBrandArr.length; i++) {
			var tmp = getItemsArr.filter((item) => item.subcategoryArr.id === getBrandArr[i].id).length;
			getBrandArr[i].itemCount = tmp;
		}
		return getBrandArr;
	}

	/////////////////////////////////////////////////////////////////////////// SORT used by filter
	// REF: https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
	fieldSorter = (fields) => {
		return function(a, b) {
			return fields
				.map(function(o) {
					var dir = 1;
					if (o[0] === '-') {
						dir = -1;
						o = o.substring(1);
					}
					if (a[o] > b[o]) return dir;
					if (a[o] < b[o]) return -dir;
					return 0;
				})
				.reduce(function firstNonZeroValue(p, n) {
					return p ? p : n;
				}, 0);
		};
	};

	/////////////////////////////////////////////////////////////////////////// FORMAT item data
	formatData(getItemsData) {
		let tempItems = getItemsData.map((dataItem) => {
			let id = dataItem.id;
			let name = parse(dataItem.name).toString();
			let slug = this.generateSlugFromName(name);// 2do - get from API (dataItem.slug)
			let status = dataItem.status;
			let category = dataItem.category;
			let categoryArr = this.getCategoryArr(category, dataItem.status);
			let subcategoryArr = dataItem.catalogue_subcat;
			if(!dataItem.catalogue_subcat.slug) dataItem.catalogue_subcat.slug = this.generateSlugFromName(dataItem.catalogue_subcat.brand);//if subcat slug is not defined
			let price = dataItem.price;
			let price_details = dataItem.price_details;
			let source = dataItem.source;
			let brand = dataItem.brand;
			let year = dataItem.year;
			let date = dataItem.createdAt;
			let excerpt = dataItem.excerpt ? parse(getExcerpt(dataItem.excerpt)).toString() : '...';
			let imageFilename = dataItem.image;
			let image = dataItem.id > 801 ? `${process.env.REACT_APP_IMG_DIR}${imageFilename}` : `${process.env.REACT_APP_IMG_DIR_LARGE}${imageFilename}`;//show larger images for old items
			let imageDir = dataItem.imageDir;
			let imageHi = dataItem.imageHi;
			if(imageDir){//show images from new imageDir
				image = `${process.env.REACT_APP_IMG_DDIR}${imageDir}/lg/${imageFilename}`;
				// year += '.';//2do - remove this when all migration is complete
				ConsoleLog(`[Context.js] IMG > ${id} > ${imageDir} + > ${image}`);
			}else{
				ConsoleLog(`[Context.js] IMG > ${id} >--- F ---> ${image}`);
			}
					

			let item = {
				id,
				status,
				category,
				categoryArr,
				subcategoryArr,
				name,
				slug,
				brand,
				price,
				price_details,
				source,
				year,
				image,
				imageDir,
				imageHi,
				imageFilename,
				excerpt,
				date
			};
			return item;
		});
		return tempItems;
	}

	/////////////////////////////////////////////////////////////////////////// FORMAT price
	formatPrice = (price, status) => {
		if (status === 2) return 'Sold';
		if (price === 0) return '£0';
		return price ? '£' + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : null;
	};

	/////////////////////////////////////////////////////////////////////////// FORMAT description
	formatDescription = (str) => {
		if (!str) return '';
		var strPrep = str.replace(/\\/g, '');
		var strParsed = parse(strPrep);
		return strParsed;
	};

	/////////////////////////////////////////////////////////////////////////// FORMAT category link
	// get slug from CatData based on categoryName
	formatCategoryLink = (getCategoryName, getItemStatus) => {
		let itemCategoryName = getCategoryName ? getCategoryName : this.state.categoryNameDefault;

		const tmpCategoryArr = this.getCategoryArr(getCategoryName, getItemStatus);
		if(tmpCategoryArr.slug) return tmpCategoryArr.slug;

		// ConsoleLog(
		//   "[Context] formatCategoryLink > getCategoryName..." +
		//   getCategoryName + ", getItemStatus: " + getItemStatus
		// );
		return CatData[itemCategoryName].slug;
	};

	/////////////////////////////////////////////////////////////////////////// GET category link tag
	// get slug from CatData based on categoryName
	getCategoryLinkTag = (getCategoryArr) => {
		ConsoleLog('[Context] getCategoryLinkTag...' + getCategoryArr);

		return getCategoryArr.slug ? (
			<Link to={getCategoryArr.slug} className="link-category">
				{getCategoryArr.title}
			</Link>
		) : null;
	};

	/////////////////////////////////////////////////////////////////////////// FORMAT brand link
	// get slug from CatData based on categoryName
	formatBrandLink = (getStatusId, getBrandSlug) => {
		ConsoleLog('[Context] formatBrandLink() getStatusId: ' + getStatusId + ' | getBrandSlug: ' + getBrandSlug);
		let apprendUrl = getStatusId === 2 ? '/sold' : '/for-sale';
		let slug = '/' + getBrandSlug + apprendUrl;
		ConsoleLog('[Context] formatBrandLink() slug: ' + slug + ' | apprendUrl: ' + apprendUrl);
		return slug;
	};

	/////////////////////////////////////////////////////////////////////////// LOAD data (items)
	// get all category data from CatData
	getCategoryArr = (getCategoryName, getItemStatus) => {
		let itemCategoryName = getCategoryName ? getCategoryName : this.state.categoryNameDefault;

		if (itemCategoryName === 1) return CatData.General;
		if (itemCategoryName === 2 && getItemStatus === 1) return CatData[this.state.categoryNameDefault];
		if ((itemCategoryName === 2 || itemCategoryName === 'Archive') && getItemStatus === 2) return CatData.Archive;
		if (itemCategoryName === 3) return CatData.Testimonials;
		if (itemCategoryName === 4) return CatData.Press;		
		if (itemCategoryName === 5) return CatData.News;
		if (itemCategoryName === 7) return CatData.PageText;
		if (itemCategoryName === 10) return CatData.History;
		if (itemCategoryName === 11) return CatData.Restoration;
		if (itemCategoryName === 2 && getItemStatus === 0) return CatData[this.state.categoryNameDefault];

		// ConsoleLog(
		//   "[Context] getCategoryArr > getCategoryName...",
		//   getCategoryName + ", getItemStatus: " + getItemStatus
		// );
		return CatData[itemCategoryName];
	};

	/////////////////////////////////////////////////////////////////////////// FORMAT item link
	// [domain]/item-slug/category-slug/item-id
	formatItemLink = (getItem) => {
		let { id, name, slug, status, category } = getItem;
		// ConsoleLog("[Context] formatItemLink() > item this.state.categoryName: ", this.state.categoryName);
		let itemSlug = slug;
		if (!slug) itemSlug = slugify(name, { lower: true });
		let itemLink = `/${itemSlug}`;
		// if (this.state.categoryName && category === CatData[this.state.categoryName].id) {
			// ConsoleLog("NO REPEAT CALL", CatData[this.state.categoryName].slug);
			// itemLink += this.state.categoryArr.slug;
		// } else {
			itemLink += `${this.formatCategoryLink(category, status)}`; //this.state.categoryNameDefault
		// }

		itemLink += `/${id}`;
		return itemLink;
	};

	/////////////////////////////////////////////////////////////////////////// GENERATE slug from name
	// sanitize the name so it is URL friendly
	// Porsche 911 GT3 3.8 PDK -> porsche-911-gt3-3.8-pdk
	// 2do - have this done at the API or CMS (field) to save processing time
	generateSlugFromName = (getName) => {
		// console.log('[Context] generateSlugFromName: ', getName);
		getName = getName ? slugify(getName.toString(), { lower: true }) : 'stock';
		return getName;
	};

	/////////////////////////////////////////////////////////////////////////// STYLE append class
	// accept default class (getDefault) ... append with any additional classes (getAppend)
	// EXAMPLE: let classControl = styleAppendClass("form-control", "form-control-sm");
	styleAppendClass = (getDefault, getAppend) => {
		let classArr = [];
		classArr.push(getDefault);
		if (getAppend) {
			classArr.push(getAppend);
		}
		let allClasses = classArr.join(' ');
		return allClasses;
	};

	/////////////////////////////////////////////////////////////////////////// FILTER items
	handleFilterChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = event.target.name;
		// const value = event.target.value;
		// ConsoleLog("[Context] handleFilterChange > this is type..." + type);
		ConsoleLog('[Context] handleFilterChange > ' + name + ' = ' + value);
		// ConsoleLog("[Context] handleFilterChange > this is value..." + value);
		this.setState(
			{
				[name]: value
			},
			this.filterItems
		);
	};

	/////////////////////////////////////////////////////////////////////////// FILTER
	// show/hide filter row
	setFilterToggle = () => {
		this.setState({ filterIsActive: this.state.filterIsActive ? false : true });
	};
	// filter items
	filterItems = () => {
		ConsoleLog('[Context] filterItems...');
		let { items, categoryName, brand, minPrice, maxPrice, minYear, maxYear, sortBy, sortRangeArr } = this.state;

		// all the items
		let sortedItems = [ ...items ];
		// filter by brand
		if (brand && brand !== 'all') {
			// ConsoleLog("[Context] filterItems() > BRAND CHANGED", brand);
			sortedItems = sortedItems.filter((item) => item.brand === parseInt(brand));
		}
		// filter by price and year
		sortedItems =
			categoryName === 'Live'
				? sortedItems
						.filter((item) => item.price >= minPrice && item.price <= maxPrice)
						.filter((item) => item.year >= minYear && item.year <= maxYear)
				: sortedItems;

		const sortByArr = sortRangeArr.find((item) => item.name === sortBy);
		// ConsoleLog("[Context] filterItems > sortBy: " + sortBy + ", sortByArr: " + sortByArr);
		const field = sortByArr.field;
		const field2 = sortByArr.field2;
		sortedItems.sort(this.fieldSorter([ field, field2 ]));
		ConsoleLog('[Context] filterItems > sortedItems...' + sortedItems);

		///////////////
		// SET STATE //
		///////////////
		this.setState({
			sortedItems
		});
	};

	render() {
		return (
			<ItemContext.Provider
				value={{
					...this.state,
					getItem: this.getItem,
					getData: this.getData,
					getDataItems: this.getDataItems,
					getCategoryArr: this.getCategoryArr,
					formatPrice: this.formatPrice,
					formatDescription: this.formatDescription,
					formatItemLink: this.formatItemLink,
					formatCategoryLink: this.formatCategoryLink,
					getCategoryLinkTag: this.getCategoryLinkTag,
					setBrandArr: this.setBrandArr,
					setFilterToggle: this.setFilterToggle,
					fieldSorter: this.fieldSorter,
					handleFilterChange: this.handleFilterChange,
					styleAppendClass: this.styleAppendClass,
					formatBrandLink: this.formatBrandLink,
					formatData: this.formatData
				}}
			>
				{this.props.children}
			</ItemContext.Provider>
		);
	}
}

const ItemConsumer = ItemContext.Consumer;

export function withItemConsumer(Component) {
	return function ConsumerWrapper(props) {
		return <ItemConsumer>{(value) => <Component {...props} context={value} />}</ItemConsumer>;
	};
}

export { ItemProvider, ItemConsumer, ItemContext };
