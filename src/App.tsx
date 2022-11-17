import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import routes from './routes';
import { Suspense } from 'react';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map(({ component: Component, path }, index) => {
          return (
            <Route exact key={index} path={`${path}`}>
              <Suspense fallback={<div>Loading</div>}>
                <Component />
              </Suspense>
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
