import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?cs=srgb&dl=pexels-nextvoyage-1461974.jpg&fm=jpg" alt="" className="sidebarImg" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sint. Illo amet nulla quo ex repellendus sint facere consectetur delectus consequuntur, fugiat aperiam esse eos saepe cupiditate beatae repudiandae expedita!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">MUSIC</li>
                <li className="sidebarListItem">TRAVEL</li>
                <li className="sidebarListItem">LIFE</li>
                <li className="sidebarListItem">SPORT</li>
                <li className="sidebarListItem">STYLE</li>
                <li className="sidebarListItem">TECH</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
  )
}
