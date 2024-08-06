import { useState } from "react";

const Navbar = () => {

    // Normal JS variable
    // let buttonText = "Login";

    // useState : superpowerful JS variable
    const [buttonState, setButtonState] = useState("Login");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\react.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Swiggy
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    City
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Amritsar</a></li>
                                    <li><a className="dropdown-item" href="#">Delhi</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something Else</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary me-3" onClick={() => {
                        (buttonState === "Login") ? setButtonState("Logout") : setButtonState("Login");
                    }}>{buttonState}</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;