import React, { Component } from "react";
import "./Navbar.css";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <span style={{ color: "royalblue" }}>Tr</span>
          <span style={{ color: "red" }}>av</span>el
        </h1>
        {/* this code liked a toggle when toggle between to classname */}
        <div className="menu-icons" onClick={this.handelClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.ClName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          {/* <Link to="/signup">Sign up</Link> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

// import React, { Component } from "react";
// import "./Navbar.css";
// import MenuItems from "./MenuItems";

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="NavbarItems">
//       <h1 className="navbar-logo">
//         <span style={{ color: "royalblue" }}>T</span>
//         <span style={{ color: "red" }}>A</span>CS
//       </h1>
//       {/* this code liked a toggle when toggle between to classname */}
//       {/* <div className="menu-icons">
//         <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
//       </div> */}
//       <div className="menu-icons">
//         <i className="fas fa-bars"></i>
//       </div>
//       <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <a className={item.ClName} href={item.url}>
//                 <i class={item.icon}></i>
//                 {item.title}
//               </a>
//             </li>
//           );
//         })}
//         <button>Sign up</button>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
