import React from "react";
// import TitleSplitter from "../TitleSplitter/TitleSplitter";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "..//SocialBtns/SocialBtns";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";
import WidgetData from "../../assets/_data/_data-widgets";
import parse from "html-react-parser";

const ContactBoxes = props => {
  let colClass = ["list-item", "flex-xs-12", "flex-tablet-6"];
  console.log("[ContactBoxes] props.cols = ", props.cols);
  if (props.cols === 2) {
    console.log("[ContactBoxes] props.cols = YES = ", props.cols);
    colClass.push("flex-sm-6");
  }
  if (props.cols === 3) {
    console.log("[ContactBoxes] props.cols = YES = ", props.cols);
    colClass.push("flex-sm-4");
  }

  return (
    <React.Fragment>
      {/* <TitleSplitter title={SiteData.brand.name} /> */}
      <section className="generic-row">
        <div className="flex-list">
          <div className={colClass.join(" ")}>
            <div className="list-content">
              <Widget body={WidgetData.openingHours} className="bg-basic" />
            </div>
          </div>

          <div className="break xs-down"></div>
          <div className={colClass.join(" ")}>
            <div className="list-content">
              <div className="widget">
                <strong>Contact</strong>
                <ul>
                  <li>
                    <a href="mailto:sales@classicandsportscar.ltd.uk">
                      Contact Sales
                    </a>
                  </li>
                  <li>Telephone: {SiteData.contact.telephone}</li>

                  <li>
                    <SocialBtns social={SiteData.social} classes="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="break sm-down"></div>

          {props.cols === 3 ? (
            <div className={`${colClass.join(" ")} flex-tablet-hidden`}>
              <div className="list-content">
                <div className="widget">
                  <strong>Address</strong>
                  <ul>
                    <li>
                      <a
                        href={SiteData.navigationFooter.columnC[1].url}
                        title={SiteData.navigationFooter.columnC[1].titleHover}
                        target={SiteData.navigationFooter.columnC[1].target}
                      >
                        {SiteData.navigationFooter.columnC[1].title}
                      </a>
                    </li>
                    <li>{parse(SiteData.contact.address)}</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactBoxes;
