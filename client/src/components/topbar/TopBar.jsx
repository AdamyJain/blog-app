import { Link } from "react-router-dom"
import "./topbar.css"

export default function topbar() {
  return (
    <div className="topbar">
      <div className="Topleft">
        <i className="topicon fa-brands fa-facebook-square"></i>
        <i className="topicon fa-brands fa-instagram-square"></i>
        <i className="topicon fa-brands fa-twitter-square"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
      </div>
      <div className="Topcenter">
        <ul className="toplist">
          <li className="topbaritem">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="topbaritem">ABOUT</li>
          <li className="topbaritem">CONTACT</li>
          <li className="topbaritem">
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li className="topbaritem">LOGOUT</li>
        </ul>
      </div>
      <div className="Topright">
        <Link className="link" to={"/settings"}>
          <img className="topimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-B8BIUAfVznweZmRZGJoS0LjSqe6zZ1oqKVZ-cA2G-RukT42KKqIg9uRLT8ddr3obFbM&usqp=CAU"
            alt="" />
        </Link>
        <i className="searchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
