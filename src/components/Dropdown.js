import React, { useState, useEffect, useRef } from "react";

export default ({ label, selected, options, setSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const bodyClick = (event) => {
      // console.log(event.target);
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", bodyClick);

    return () => {
      document.body.removeEventListener("click", bodyClick);
    };
  }, []);

  const renderedOption = options.map((option) => {
    if (selected === option) {
      return null;
    }
    return (
      <div
        key={option.label}
        className="item"
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOption}
          </div>
        </div>
      </div>
    </div>
  );
};
