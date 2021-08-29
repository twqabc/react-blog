import { Route } from 'react-router-dom'

import Nav from "./components/Nav"
import Footer from './components/Foooter'
import Signin from "./pages/everyone/Signin"
import About from "./pages/everyone/About"
import Work from "./pages/everyone/Work"
import Blog from "./pages/everyone/Blog"
import ArticleEdit from './pages/admin/ArticleEdit';

function App() {
  return (
    <div className="container">

     <Nav/>
                <Footer/>

    <Route path="/signin" component={Signin}/>
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/admin/articleedit" component={ArticleEdit}/>
    </div>
  );
}

export default App;
