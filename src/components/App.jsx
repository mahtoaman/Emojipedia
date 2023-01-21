import React from "react";
import Entry from "./Entry";
import Search from './Search'
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>EMOJIPEDIA</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => {
          return (
            <Entry
              name={emoji.name}
              emoji={emoji.emoji}
              meaning={emoji.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
