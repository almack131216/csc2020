import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { apiGetItemDetails, ConsoleLog } from "../../../assets/js/Helpers";
import Parser from "html-react-parser";
// import Item from "../../Items/Item/Item";
import { ItemContext } from "../../../Context";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import Loading from "../../../components/Loading/Loading";
import { FaYoutube } from "react-icons/fa";

const getTitle = (getCategoryId) => {
  switch (getCategoryId) {
    case 1:
      return "This car is for sale";
    case 2:
      return "View Listing";
    case 3:
      return "Owner's Testimonial";
    case 13:
      return "YouTube video";
    default:
      return "Related";
  }
}

const PrintItem = props => {  
  const item = props.item;
  const title = item.year
    ? `${item.year} ${Parser(item.name)}`
    : Parser(item.name);
  // const imagePath = process.env.REACT_APP_IMG_DIR + item.image;
  const imagePath = item.imageDir ? process.env.REACT_APP_IMG_DDIR + item.imageDir + '/lg/' + item.image : process.env.REACT_APP_IMG_DIR + item.image;
  const showIcon = props.showIcon;
  const wrapClass = showIcon ? `icon-overlay ${showIcon}` : null;

  return (
    <div className="ir-wrap-all">
    <h5>{getTitle(item.category)}</h5>
    <div className={`ir-wrap ${wrapClass}`}>
      {
      imagePath ? (
      <div className="ir-img">
        <Link to={props.url}>
          <Img
            src={[imagePath, ImageNotFound]}
            alt={title}
            className="img-loading"
          />
          {showIcon && showIcon === "youtube" ? <FaYoutube className="youtube"/> : null}
        </Link>
      </div>
      ) : null
      }
      <div className="ir-txt">
        <p>
          <Link to={props.url}>{title}</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

const ItemRelated = props => {
  
  const itemIds = props.itemIds;
  // let videosArr = props.videosArr;
  let handleForYouTube = props.handleForYouTube;
  
  ConsoleLog("[ItemRelated] itemId: " + props.itemIds + ", itemIds: " + itemIds);

  // INIT context
  const context = useContext(ItemContext);
  const { formatItemLink } = context;

  // API - generate end point based on categoryName + itemId
  const apiArr = {
    categoryName: "ItemRelated",
    itemId: itemIds.length === 1 ? itemIds : null,
    itemIds: itemIds.length > 1 ? itemIds : null
  };
  ConsoleLog("[ItemRelated] apiArr: " + JSON.stringify(apiArr));

  const [itemsRelated, setItemsRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [myVideosArr, setMyVideosArr] = useState([]);
  // const [irTitle, setIrTitle] = useState("");

  let classesWrap = ["item-extras item-related"];
  if (props.class) classesWrap.push(props.class);

  const apiUrlRelated = apiGetItemDetails(apiArr);
  ConsoleLog("[ItemRelated] apiUrlRelated: " + apiUrlRelated);

  

  // FETCH data
  useEffect(() => {
    setLoading(true);

    fetch(apiUrlRelated)
      .then(response => response.json())
      .then(data => {
        ConsoleLog("[ItemRelated] useEffect() data: " + data);
        let [...getItemsRelated] = [...data];
        ConsoleLog("[ItemRelated] useEffect() getItemsRelated: " + JSON.stringify(getItemsRelated));
        // ConsoleLog("[ItemRelated] useEffect() videosArr: " + videosArr);
        setItemsRelated(getItemsRelated);
        
        let tmpArr = [];
        let tmpArr2 = getItemsRelated && getItemsRelated[0].youtube ? [...getItemsRelated].filter((item) => item.youtube !== '') : [];
        ConsoleLog("[ItemRelated] useEffect() videosArr X: >>> " + JSON.stringify(tmpArr2));
        // ConsoleLog("[ItemRelated] useEffect() videosArr X: >>> " + tmpArr2[0].youtube);
        for(let i=0; i < tmpArr2.length; i++){
          // loopData += `<li>${data[i].name}</li>`
          if(tmpArr2[i].youtube){
            tmpArr.push(tmpArr2[i].youtube);
            ConsoleLog("[ItemRelated] useEffect() videosArr X: >>> push: " + tmpArr2[i].youtube);
          }
          
        }
        // setMyVideosArr(tmpArr);
        handleForYouTube(tmpArr);
        setLoading(false);        
      });
  }, [apiUrlRelated,handleForYouTube]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classesWrap.join(" ")}>
      {/* <h5>{getTitle(3)}</h5> */}
      {itemsRelated.map((item, index) => {
        // videosArr.push(item.youtube);
        // handleForYouTube([5555,6666]);
        return (
        <PrintItem
          key={index}
          item={item}
          url={formatItemLink(item)}
          showIcon={item.youtube ? 'youtube' : null}
          />
        );
      })}
    </div>
  );
};

export default ItemRelated;
