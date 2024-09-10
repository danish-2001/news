// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'

// class Navbar extends Component {
//     constructor() {
//         super()
//         this.state = {
//            search:""
//         }
//     }

//     getInputData(event) {
//         this.setState({search:event.target.value})
//     }

//     postData(event) {
//         event.preventDefault();
//         this.props.changeSearch(this.state.search)
//         this.setState({search:""})
//     }

//     render() {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand text-light" to="/All" onClick={()=>this.props.changeSearch("")}>NewsApp</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active text-light" aria-current="page" to="/All" onClick={()=>this.props.changeSearch("")}>All</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-light" to="/Politics" onClick={()=>this.props.changeSearch("")}>Politics</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-light" to="/Education" onClick={()=>this.props.changeSearch("")}>Education</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-light" to="/Crime" onClick={()=>this.props.changeSearch("")}>Crime</Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Other
//                                 </Link>
//                                 <ul className="dropdown-menu">
//                                     <li><Link className="dropdown-item" to="/Science" onClick={()=>this.props.changeSearch("")}>Science</Link></li>
//                                     <li><Link className="dropdown-item" to="/Tecnology" onClick={()=>this.props.changeSearch("")}>Tecnology</Link></li>
//                                     <li><Link className="dropdown-item" to="/Entertainment" onClick={()=>this.props.changeSearch("")}>Entertainment</Link></li>
//                                     <li><Link className="dropdown-item" to="/Sport" onClick={()=>this.props.changeSearch("")}>Sport</Link></li>
//                                     <li><Link className="dropdown-item" to="/Cricket" onClick={()=>this.props.changeSearch("")}>Cricket</Link></li>
//                                     <li><Link className="dropdown-item" to="/Health" onClick={()=>this.props.changeSearch("")}>Health</Link></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Language
//                                 </Link>
//                                 <ul className="dropdown-menu">
//                                     <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("hi")}>Hindi</button></li>
//                                     <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("en")}>English</button></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                         <form className="d-flex" role="search" onSubmit={(event)=>this.postData(event)}>
//                             <input className="form-control me-2" name='search' value={this.state.search} onChange={(event)=>this.getInputData(event) } type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-light" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }
// }
// export default Navbar

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      language: "en", // Default language
    };
  }

  getInputData = (event) => {
    this.setState({ search: event.target.value });
  };

  postData = (event) => {
    event.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  };

  changeLanguage = (lang) => {
    this.setState({ language: lang });
    this.props.changeLanguage(lang); // Assuming this method exists in the parent component
  };

  render() {
    const { language } = this.state;

    // Language-specific content
    const content = {
      en: {
        brand: "NewsApp",
        links: {
          all: "All",
          politics: "Politics",
          education: "Education",
          crime: "Crime",
          science: "Science",
          technology: "Technology",
          entertainment: "Entertainment",
          sport: "Sport",
          cricket: "Cricket",
          health: "Health",
        },
        dropdown: {
          other: "Other",
          language: "Language",
          hindi: "Hindi",
          english: "English",
        },
      },
      hi: {
        brand: "समाचार ऐप",
        links: {
          all: "सभी",
          politics: "राजनीति",
          education: "शिक्षा",
          crime: "अपराध",
          science: "विज्ञान",
          technology: "प्रौद्योगिकी",
          entertainment: "मनोरंजन",
          sport: "खेल",
          cricket: "क्रिकेट",
          health: "स्वास्थ्य",
        },
        dropdown: {
          other: "अन्य",
          language: "भाषा",
          hindi: "हिंदी",
          english: "अंग्रेजी",
        },
      },
    };

    const { brand, links, dropdown } = content[language];

    return (
      <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-light"
            to="/All"
            onClick={() => this.props.changeSearch("")}
          >
            {brand}
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
              {Object.entries(links).map(([key, value]) => (
                <li key={key} className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to={`/${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    onClick={() => this.props.changeSearch("")}
                  >
                    {value}
                  </Link>
                </li>
              ))}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdown.other}
                </Link>
                <ul className="dropdown-menu">
                  {Object.entries(links).map(([key, value]) => (
                    <li key={key}>
                      <Link
                        className="dropdown-item"
                        to={`/${key.charAt(0).toUpperCase() + key.slice(1)}`}
                        onClick={() => this.props.changeSearch("")}
                      >
                        {value}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdown.language}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => this.changeLanguage("hi")}
                    >
                      {dropdown.hindi}
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => this.changeLanguage("en")}
                    >
                      {dropdown.english}
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={this.postData}>
              <input
                className="form-control me-2"
                name="search"
                value={this.state.search}
                onChange={this.getInputData}
                type="search"
                placeholder={language === "en" ? "Search" : "खोजें"}
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                {language === "en" ? "Search" : "खोजें"}
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
