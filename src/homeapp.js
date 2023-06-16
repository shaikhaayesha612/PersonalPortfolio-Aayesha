import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import About from "./about";
import SkillsAch from "./skills_ach";
import Portfolio from "./portfolio";
import Contact from "./contact";

const HomeApp = () =>{
    return(
        <HashRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/> } /> 
                <Route exact path="/about" element={<About/> } /> 
                <Route exact path="/skills_ach" element={<SkillsAch/> } /> 
                <Route exact path="/portfolio" element={<Portfolio/> } /> 
                <Route exact path="/contact" element={<Contact/> } /> 
            </Routes>
        </HashRouter>
    )
}

export default HomeApp;