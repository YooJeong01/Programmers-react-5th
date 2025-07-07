import React, { createElement as h } from "./lib/react.js";
import ReactDOM, { createRoot } from "./lib/react-dom.js";
// import { PlanetPage } from "./pages/PlanetPage.js";
import { _PlanetPage } from "./pages/_PlanetPage.js";
// import { AvatarPage } from "./pages/AvatarPage.js";
import AvatarPage from "./pages/AvatarPage.js";


const container = document.getElementById('app');


if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(h(AvatarPage));
}


































