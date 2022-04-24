import  { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

    let navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    return (
        <div className="navbar">
            <button type="button" onClick={goHome}><h1>Navbar</h1></button>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li>
                    <NavLink to={{pathname: "/profile/den"}} state={{registrationdate:"2021-07-07"}}>Profile</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;