import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ language, searchTerm }) => {
  const [result, setResult] = useState([]);
  const [debouncedText, setDebouncedText] = useState(searchTerm);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedText(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const request = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: searchTerm,
            target: language.title,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setResult(data.data.translations[0]);
    };
    request();
  }, [language, debouncedText]);

  return <div>{result.translatedText}</div>;
};
