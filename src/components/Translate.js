// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM;
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
  {
    label: "Africans",
    title: "ar",
  },
  {
    label: "Tamil",
    title: "ta",
  },
  {
    label: "Hindi",
    title: "hi",
  },
];

export default () => {
  const [selected, setSelected] = useState(languages[1]);
  const [term, setTerm] = useState("hi there");

  return (
    <div className="ui container">
      <div className="ui form">
        <input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>
      <Dropdown
        label="Select a language"
        selected={selected}
        options={languages}
        setSelected={setSelected}
      />
      <div className="ui header">
        Output:
        <Convert language={selected} searchTerm={term} />
      </div>
    </div>
  );
};
