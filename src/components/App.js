import React, { useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Accordion from "./Accordion";
import Translate from "./Translate";
import Header from "./Header";
import Route from "./Route";

const accContents = [
  {
    title: "What is ReactJs",
    content:
      "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components",
  },
  {
    title: "Is react JS frontend or backend?",
    content:
      "Created and maintained by Facebook, React is a front-end library that runs on a browser. Like most libraries, this one runs on web servers like Apache or with backends like PHP or Rails.",
  },
  {
    title: "What can I do with React JS?",
    content:
      "React code snippets and components (building blocks of React code used to create specific parts of a user interface)",
  },
];

const options = [
  {
    label: "The color of red",
    value: "red",
  },
  {
    label: "The color of green",
    value: "green",
  },
  {
    label: "The color of blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <div className="ui icon message">
        <i className="info circle icon"></i>
        <div className="content">
          <div className="header">About this app</div>
          <p>This app implements navigation without using React Router</p>
        </div>
      </div>

      <Header />
      <Route path="/">
        <Accordion contents={accContents} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          options={options}
          setSelected={setSelected}
        />
        <h1 style={{ color: selected.value }}>
          <i className="hand point right icon"></i>Use the dropdown to change my
          colour
          <i className="hand point left icon"></i>
        </h1>
      </Route>
      <Route path="/translator">
        <Translate />
      </Route>
    </div>
  );
};
