import { Link, NavLink } from 'react-router-dom';

// bootstarp css link
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { mainheaderlogos } from "../data";

const Mainheader = () => {
    return (
        <section className="mainheader_wrapper">
            <div className="container mainheader_container">
                <div className="row mainheader_row">
                    <ul className="mainhome_logos">
                        {
                            mainheaderlogos.map(({ avatar, name, path }, index) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            <img src={avatar} alt="mainheaderlogo" className='mainheaderlogo' style={{ width: "49px" }} />
                                        </span>
                                        <NavLink to={path} className={({ isActive }) => isActive ? "active-nav logoname" : "logoname"}>
                                            {name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Mainheader;