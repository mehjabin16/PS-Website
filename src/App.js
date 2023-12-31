import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Test from "./views/Test";
import CarouselTest from "./carousel";
import GalleryView from "./views/GalleryView";
import Blog from "./views/Blog";
import SimpleBlog from "./views/SimpleBlog";
import About from "./views/About";
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  //const childRef = useRef();
  //let location = useLocation();

  /*useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);*/

  return (
    <Switch>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/carousel" component={CarouselTest} />
      <AppRoute exact path="/test" component={Test} layout={LayoutDefault} />
      <AppRoute
        exact
        path="/gallery"
        component={GalleryView}
        layout={LayoutDefault}
      />
      <AppRoute
        exact
        path="/blog"
        component={Blog}
      />
      <AppRoute
        exact
        path="/simpleblog"
        component={SimpleBlog}
        layout={LayoutDefault}
      />
      <AppRoute
        exact
        path="/about"
        component={About}
        layout={LayoutDefault}
      />
    </Switch>
  );
};

export default App;
