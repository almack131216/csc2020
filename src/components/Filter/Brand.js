import React from "react";

const brandFilter = props => {
  const brand = props.brand === 'all' ? 'all' : props.brand; //get active brand
  const label = props.label ? props.label : "Select";
  const categorySlugBase = props.categorySlugsArr.base;
  const categorySlugAppendBrand = props.categorySlugsArr.appendBrand;
  // STYLE // get styling from filter container
  let classParent = props.classParent;
  let classLabel = props.classLabel;
  let classControl = props.classControl;
  // (END) STYLE

  // GET all brands
  let brands = props.brands;
  // MAP to jsx
  brands = brands.map((item, index) => {
    return (
      <option value={item.slug} key={index}>        
          {item.brand} {item.itemCount ? `(${item.itemCount})` : null}
      </option>
    );
  });

  const handleSelectChange = (e) => {
    const goToSlug = e.target.value === categorySlugBase ? categorySlugBase : `${e.target.value}${categorySlugAppendBrand}`;
    // console.log('[Brands] history: ', goToSlug);
    
    // return <Redirect to='/target' />;
		window.location = `/${goToSlug}`;
  }

  return (
    <div className={classParent}>
      <label htmlFor="brand" className={classLabel}>
        {label}
      </label>
      <select
        name="brand"
        id="brand"
        className={classControl}
        value={brand ? brand : ""}
        onChange={handleSelectChange}
      >
        {brands}
      </select>
    </div>
  );
};

export default brandFilter;
