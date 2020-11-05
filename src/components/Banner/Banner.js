import React from "react";
import parse from "html-react-parser";

export default function Banner({ children, title, subtitle, type }) {
  return (
    <div className={`banner ${type}`}>
      {title ? parse(`<h1>${title}</h1>`) : null}
      {subtitle ? parse(`<p>${subtitle}</p>`) : null}
      {children ? children : null}
    </div>
  );
}
