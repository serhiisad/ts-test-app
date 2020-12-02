// import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { NavLink, Switch, Route ,BrowserRouter as Router  } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import NewsAdder from "./components/Feed/NewsAdder";
import { Provider } from "react-redux";
import { loadPosts } from "./redux-store/actionCreators";
import Store from "./redux-store/store";


const jsonDb = require("./db/news.json");

const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // *loading posts from json into redux store
    Store.dispatch(loadPosts(jsonDb));
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <div className="app">
          <h1>NewsFeed</h1>
          <Navigation />
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Feed</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add Posts</NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Feed}></Route>
    <Route exact path="/add" component={NewsAdder}></Route>
  </Switch>
);

export default App;
