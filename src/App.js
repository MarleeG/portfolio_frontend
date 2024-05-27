import React, { 
  useState, 
  Suspense, 
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import {ProjectContext} from "./context/auth-context";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import Home from "./home/pages/Home";

const Portfolio = React.lazy(() => import("./portfolio/pages/Portfolio"));
const Connect = React.lazy(() => import("./connect/pages/Connect"));

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/portfolio" exact>
        <Portfolio />
      </Route>

      <Route path="/connect" exact>
        <Connect />
      </Route>

      <Redirect to="/" />
    </Switch>
  );

  return (
    <ProjectContext.Provider
      value={{ isDrawerOpen: isDrawerOpen, openDrawer, closeDrawer }}
    >
      <Router>
        <MainNavigation />

        <main>
        <h1>STILL HERE</h1>
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
      </Router>
    </ProjectContext.Provider>
  );
}

export default App;
