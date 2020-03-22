import React from "react";
import parse from "html-react-parser";

const InfoBoxes = props => {
  const columnsArr = props.columnsArr;
  const columnCount = columnsArr.length;

  let rowClass = [];
  if (props.rowClass) {
    rowClass.push(props.rowClass);
  }

  let colClass = ["list-item", "flex-xs-12", "flex-tablet-6"];
  console.log("[InfoBoxes] columnCount = ", props.cols);
  if (columnCount === 2) {
    console.log("[InfoBoxes] columnCount = YES = ", columnCount);
    colClass.push("flex-sm-6");
  }
  if (columnCount === 3) {
    console.log("[InfoBoxes] columnCount = YES = ", columnCount);
    colClass.push("flex-sm-4");
  }

  return (
    <React.Fragment>
      <section className={rowClass.join(" ")}>
        <div className="flex-list">
          <div className={colClass.join(" ")}>
            <div className="list-content">
              <div
                className={`widget ${
                  columnsArr[0].class ? columnsArr[0].class : null
                }`}
              >
                {columnsArr[0].title
                  ? parse(`<strong>${columnsArr[0].title}</strong>`)
                  : null}
                {columnsArr[0].text}
              </div>
            </div>
          </div>

          {columnCount > 1 ? (
            <>
              <div className="break xs-down"></div>

              <div className={colClass.join(" ")}>
                <div className="list-content">
                  <div
                    className={`widget ${
                      columnsArr[1].class ? columnsArr[1].class : null
                    }`}
                  >
                    {columnsArr[1].title
                      ? parse(`<strong>${columnsArr[1].title}</strong>`)
                      : null}
                    {columnsArr[1].text}
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {columnCount === 3 ? (
            <>
              <div className="break sm-down"></div>

              <div className={`${colClass.join(" ")} flex-tablet-12`}>
                <div className="list-content">
                  <div
                    className={`widget ${
                      columnsArr[2].class ? columnsArr[2].class : null
                    }`}
                  >
                    {columnsArr[2].title
                      ? parse(`<strong>${columnsArr[2].title}</strong>`)
                      : null}
                    {columnsArr[2].text}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </React.Fragment>
  );
};

export default InfoBoxes;
