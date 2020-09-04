import React, { useState } from "react";

export default ({ contents }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedContents = contents.map((content, index) => {
    return (
      <React.Fragment key={content.title}>
        <div
          onClick={() => onTitleClick(index)}
          className={`title ${activeIndex === index ? "active" : ""}`}
        >
          <i className="dropdown icon"></i>
          {content.title}
        </div>
        <div className={`content ${activeIndex === index ? "active" : ""}`}>
          <p className={`transition ${activeIndex === index ? "visible" : ""}`}>
            {content.content}
          </p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedContents}</div>;
};
