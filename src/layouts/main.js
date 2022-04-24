import Navbar from '../components/navbar/navbar'
import  { Routes, Route } from "react-router-dom";
import Home from '../components/home/home'
import Contact from '../components/contact/contact'
import About from '../components/about/about'
import Profile from '../components/user/profile'

function Main() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="content">

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile/:username" element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main;