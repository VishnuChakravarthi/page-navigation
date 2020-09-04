import React from "react";
import Link from "./Link";

export default () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        List
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translator" className="item">
        Translator
      </Link>
    </div>
  );
};
