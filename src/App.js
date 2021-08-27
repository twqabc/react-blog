import {BrowserRouter} from 'react-router-dom'
import Nav from "./components/Nav"
import Footer from './components/Foooter'

import { Route } from 'react-router-dom'

import myblog from './components/MyBlog'
import index from "./pages/Index"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav/>
     <Footer/>
                <Route path="/index" component={index}/>
                <Route path="/myblog" component={myblog} />
     </BrowserRouter>
    </div>
  );
}

export default App;
