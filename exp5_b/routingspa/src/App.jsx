import {BrowserRouter,Routes,Route,Link,useLocation} from "react-router-dom";
import {useEffect,useState} from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";

function PageLoader({children}){
  const location=useLocation();
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(true);
    const t=setTimeout(()=>setLoading(false),900);
    return()=>clearTimeout(t);
  },[location.pathname]);

  if(loading){
    return(
      <div className="loaderBox">
        <div className="spinner"></div>
        <h2 className="loadingText">Loading...</h2>
      </div>
    );
  }

  return children;
}

export default function App(){
  return(
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h2 className="logo">Lazy SPA</h2>
          <div className="links">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/about">About</Link>
            <Link className="navLink" to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="content">
          <PageLoader>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </PageLoader>
        </div>
      </div>
    </BrowserRouter>
  );
}
