import React, { useState, useMemo, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { UIContext } from "./context/ui-context";
import { ThemeProvider } from "./context/theme-context";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import Home from "./home/pages/Home";

const Portfolio = React.lazy(() => import("./portfolio/pages/Portfolio"));
const Connect = React.lazy(() => import("./connect/pages/Connect"));

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const uiCtxValue = useMemo(
    () => ({ isDrawerOpen, openDrawer, closeDrawer }),
    [isDrawerOpen]
  );

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/connect" exact component={Connect} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <ThemeProvider>
        <UIContext.Provider value={uiCtxValue}>
          <MainNavigation />

          <main>
            <Suspense
              fallback={
                <div className="page center">
                  <LoadingSpinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </main>
        </UIContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
