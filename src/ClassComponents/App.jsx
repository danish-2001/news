import React, {Component} from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

class App extends Component {
    constructor(){
        super()
        this.state = {
           language:"hi",
           search:""
        }
    }

    changeLanguage = (data) => {
        this.setState({language:data})
    }
    changeSearch = (data) => {
        this.setState({search:data})
    }

    render() {
    return (
        <>
        <BrowserRouter>
        <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} section="New Section"/>
        <Routes>
            <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="All"/>} />
            <Route path="/All" element={<Home search={this.state.search} language={this.state.language} q="All"/>} />
            <Route path="/Politics" element={<Home search={this.state.search} language={this.state.language} q="Politics"/>} />
            <Route path="/Education" element={<Home search={this.state.search} language={this.state.language} q="Education"/>} />
            <Route path="/Crime" element={<Home search={this.state.search} language={this.state.language} q="Crime"/>} />
            <Route path="/Science" element={<Home search={this.state.search} language={this.state.language} q="Science"/>} />
            <Route path="/Tecnology" element={<Home search={this.state.search} language={this.state.language} q="Tecnology"/>} />
            <Route path="/Entertainment" element={<Home search={this.state.search} language={this.state.language} q="Entertainment"/>} />
            <Route path="/Sport" element={<Home search={this.state.search} language={this.state.language} q="Sport"/>} />
            <Route path="/Cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>} />
            <Route path="/Health" element={<Home search={this.state.search} language={this.state.language} q="Health"/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

}
export default App