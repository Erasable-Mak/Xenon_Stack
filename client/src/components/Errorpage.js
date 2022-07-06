import React from 'react'
import Helmet from 'react-helmet'
import { NavLink } from 'react-router-dom';
// error page for non present adress page entered by user for example : /XenonStack
function Errorpage() {
    return (
        <>
            <Helmet bodyAttributes={{style: 'background-image: linear-gradient(90deg, #fff 50%, #5bbdce 50%)'}}/>
            <div id="notfound">
                <div className="notfound">
                    <div className="nonfound-404">
                       <h1>404</h1>
                    </div>
                    <h2>we are sorry, page not found!</h2>
                    <p className="mb-5">
                        The page you are looking fo might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <NavLink to="/">Back To Homepage</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage
