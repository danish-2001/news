import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      isDarkMode: false,
      activeLink: "All", // Set default active link
    };
  }

  toggleTheme = () => {
    this.setState(
      (prevState) => ({
        isDarkMode: !prevState.isDarkMode,
      }),
      () => {
        document.body.className = this.state.isDarkMode
          ? "dark-mode"
          : "light-mode";
      }
    );
  };

  getInputData = (event) => {
    this.setState({ search: event.target.value });
  };

  postData = (event) => {
    event.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  };

  handleLinkClick = (link) => {
    this.setState({ activeLink: link });
    this.props.changeSearch(""); // Clear search on link click
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-danger sticky-top">
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-light btn btn-dark ${
              this.state.activeLink === "All" ? "active" : ""
            }`}
            to="/All"
            onClick={() => this.handleLinkClick("All")}
          >
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["All", "Trading", "Politics", "Education", "Crime"].map(
                (item) => (
                  <li className="nav-item" key={item}>
                    <Link
                      className={`nav-link ${
                        this.state.activeLink === item
                          ? "text-dark fw-bold"
                          : "text-light"
                      }`}
                      to={`/${item}`}
                      onClick={() => this.handleLinkClick(item)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${
                    this.state.activeLink === "Other"
                      ? "text-warning"
                      : "text-light"
                  }`}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </Link>
                <ul className="dropdown-menu btn btn-outline-secondary">
                  {[
                    "Science",
                    "Technology",
                    "Entertainment",
                    "Sport",
                    "Cricket",
                    "Health",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        className={`dropdown-item ${
                          this.state.activeLink === item ? "bg-danger" : ""
                        }`}
                        to={`/${item}`}
                        onClick={() => this.handleLinkClick(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${
                    this.state.activeLink === "Language"
                      ? "text-danger"
                      : "text-light"
                  }`}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu btn btn-outline-secondary">
                  {["Hindi", "English"].map((lang) => (
                    <li key={lang}>
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          this.props.changeLanguage(
                            lang === "Hindi" ? "hi" : "en"
                          )
                        }
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={this.postData}>
              <button
                className="btn btn-outline-light me-2"
                type="button"
                onClick={this.toggleTheme}
              >
                {this.state.isDarkMode ? "Light" : "Dark"}
              </button>
              <input
                className="form-control me-2"
                name="search"
                value={this.state.search}
                onChange={this.getInputData}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Navbar extends Component {
//   constructor() {
//     super();
//     this.state = {
//       search: "",
//       isDarkMode: false,
//     };
//   }
//   toggleTheme = () => {
//     this.setState(
//       (prevState) => ({
//         isDarkMode: !prevState.isDarkMode,
//       }),
//       () => {
//         document.body.className = this.state.isDarkMode
//           ? "dark-mode"
//           : "light-mode";
//       }
//     );
//   };

//   getInputData(event) {
//     this.setState({ search: event.target.value });
//   }

//   postData(event) {
//     event.preventDefault();
//     this.props.changeSearch(this.state.search);
//     this.setState({ search: "" });
//   }

//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg bg-danger  sticky-top">
//           <div className="container-fluid">
//             <button
//               className="navbar-brand text-light btn btn-dark"
//               to="/All"
//               onClick={() => this.props.changeSearch("")}
//             >
//               NewsApp
//             </button>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active text-light"
//                     aria-current="page"
//                     to="/All"
//                     onClick={() => this.props.changeSearch("")}
//                   >
//                     All
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link text-light"
//                     to="/Politics"
//                     onClick={() => this.props.changeSearch("")}
//                   >
//                     Politics
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link text-light"
//                     to="/Education"
//                     onClick={() => this.props.changeSearch("")}
//                   >
//                     Education
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link text-light"
//                     to="/Crime"
//                     onClick={() => this.props.changeSearch("")}
//                   >
//                     Crime
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <Link
//                     className="nav-link dropdown-toggle text-light"
//                     to="/"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Other
//                   </Link>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/Science"
//                         onClick={() => this.props.changeSearch("")}
//                       >
//                         Science
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/Tecnology"
//                         onClick={() => this.props.changeSearch("")}
//                       >
//                         Tecnology
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/Entertainment"
//                         onClick={() => this.props.changeSearch("")}
//                       >
//                         Entertainment
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/Sport"
//                         onClick={() => this.props.changeSearch("")}
//                       >
//                         Sport
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/Cricket"
//                         onClick={() => this.props.changeSearch("")}
//                       >
//                         Cricket
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/Health"
//                         onClick={() => this.props.changeSearch("")}
//                       >
//                         Health
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <Link
//                     className="nav-link dropdown-toggle text-light"
//                     to="/"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Language
//                   </Link>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <button
//                         className="dropdown-item"
//                         onClick={() => this.props.changeLanguage("hi")}
//                       >
//                         Hindi
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         className="dropdown-item"
//                         onClick={() => this.props.changeLanguage("en")}
//                       >
//                         English
//                       </button>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//               <form
//                 className="d-flex"
//                 role="search"
//                 onSubmit={(event) => this.postData(event)}
//               >
//                 <span onClick={this.toggleTheme}>
//                   {" "}
//                   {this.state.isDarkMode ? (
//                     <>
//                       <div class="form-check form-switch">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="flexSwitchCheckDefault"
//                         />
//                         <label
//                           class="form-check-label"
//                           for="flexSwitchCheckDefault"
//                         >
//                         Dark Mode
//                         </label>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div class="form-check form-switch">
//                         <input
//                           class="form-check-input"
//                           type="checkbox"
//                           id="flexSwitchCheckDefault"
//                         />
//                         <label
//                           class="form-check-label"
//                           for="flexSwitchCheckDefault"
//                         >
//                           Light Mode
//                         </label>
//                       </div>
//                     </>
//                   )}{" "}
//                 </span>
//                 <input
//                   className="form-control me-2"
//                   name="search"
//                   value={this.state.search}
//                   onChange={(event) => this.getInputData(event)}
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button
//                   className="btn btn-outline-light btn btn-dark"
//                   type="submit"
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }
// export default Navbar;
