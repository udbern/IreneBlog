import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer";
import Blogpost from "./pages/BLogpost";
import Error from "./pages/Error";






function App() {
  return (
    <Router>
      
      <Navbar/>
      
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/blog"element={<Blog/>}></Route>
        <Route path="/blog/:slug"element={<Blogpost/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
