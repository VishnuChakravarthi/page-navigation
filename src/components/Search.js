import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    const timeOutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  const renderedList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org/w?currid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span
            className=""
            dangerouslySetInnerHTML={{ __html: result.snippet }}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label className="header">Enter text and wait for a sec</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};
