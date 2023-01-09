import { useState } from "react";
import "./App.css";

import Header from "./components/header";

function App() {
  const fontSizesRange = {
    minFontSize: 10,
    defaultFontSize: 12,
    maxFontSize: 14,
  };
  const [fontSize, setFontSize] = useState(fontSizesRange.defaultFontSize);
  const [specialStyles, setSpecialStyles] = useState({
    simpleVersion: true,
    nightTheme: false,
    soundOn: false,
  });

  const languages = ["O'zbekcha", "Русский", "English"];

  const [language, setLanguage] = useState("O'zbekcha");
  return (
    <div
      style={{
        filter: specialStyles.nightTheme ? "grayscale(100%)" : null,
        fontSize: fontSize,
      }}
    >
      <Header
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontSizesRange={fontSizesRange}
        specialStyles={specialStyles}
        setSpecialStyles={setSpecialStyles}
        languages={languages}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
}

export default App;
