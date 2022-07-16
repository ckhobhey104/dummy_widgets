import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import { languages } from "./items";

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={languages}
      />
      <hr />
      <div className="ui header">
        Output:
        <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
