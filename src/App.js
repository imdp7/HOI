import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';
import History from './Components/History';
import Networks from './Components/Networks';
import Web1 from './Components/Web1';
import Web2 from './Components/Web2';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/history",
    component: History,
  },
  {
    path: "/networks",
    component: Networks,
  },
  {
    path: "/web1",
    component: Web1,
  },
  {
    path: "/web2",
    component: Web2,
  },
  {
    component: PageNotFound,
  }
];

function App() {
  return (
    <Router>
    <div>
    <div class="sticky top-0 z-50">
     <Header/>
    </div>
     <div>
    
     <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
          
         <Main/>
       </Switch>
     </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
