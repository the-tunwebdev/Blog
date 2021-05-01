
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Link,
  Route
} from "react-router-dom";
import AddBlog from './components/AddBlog/AddBlog';
import BlogPosts from './components/BlogPosts/BlogPosts';
import AdminBlog from './components/AdminBlog/AdminBlog';
import EditBlog from './components/AdminBlog/EditBlog';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/addblog'><AddBlog /></Route>
          <Route path='/adminblog'><AdminBlog /></Route>
          {/* <Route path='/:id/editblog'><EditBlog /></Route> */}


          <Route exact path='/'><BlogPosts /></Route>
          
          

        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
