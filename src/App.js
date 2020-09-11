import React from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Body from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import {LanguageProvider} from "./component/TranslateLanguage/TransLanguage";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
          <Header/>
          <Body/>
          <Footer/>
      </div>
    </LanguageProvider>
  );
}

export default App;
