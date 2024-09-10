import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import About from "./About";
import Privacy from "./Privacy";
import Service from "./Service";
import TermAndConditions from "./TermAndConditions";

function App() {
  let [language, setLanguage] = useState("hi");
  let [search, setSearch] = useState("");

  const changeLanguage = (data) => {
    setLanguage(data);
  };
  const changeSearch = (data) => {
    setSearch(data);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          changeLanguage={changeLanguage}
          changeSearch={changeSearch}
          section="New Section"
        />
        <marquee className="bg-dark text-white sticky loop">
          <a
            className="text-white"
            href="https://www.aajtak.in/india/news/story/pm-modi-changed-his-x-dp-and-launch-har-ghar-tiranga-campaign-ahead-of-independence-day-2024-ntc-2005188-2024-08-09"
            target="blank"
          >
            पीएम मोदी ने किया 'हर घर तिरंगा अभियान' का आगाज, X में DP बदलकर की
            लोगों से की ये अपील{" "}
          </a>
          || Stocks to Watch: आज OFSS, CAMS समेत ये शेयर लगा सकते हैं दौड़,
          क्‍या लगाएंगे दांव? || Trading Strategy: निफ्टी लाइफ टाइम हाई के लिए
          तैयार, जारी रहेगा बैंक निफ्टी का शानदार प्रदर्शन || Trading Strategy :
          निफ्टी में दिख सकता है 24,300 तक का उछाल, बैंक निफ्टी जाएगा 50,000 के
          पार
        </marquee>
        <Routes>
          <Route
            path="/"
            element={<Home search={search} language={language} q="All" />}
          />
          <Route
            path="/All"
            element={<Home search={search} language={language} q="All" />}
          />
          <Route
            path="/Trading"
            element={<Home search={search} language={language} q="Trading" />}
          />
          <Route
            path="/Politics"
            element={<Home search={search} language={language} q="Politics" />}
          />
          <Route
            path="/Education"
            element={<Home search={search} language={language} q="Education" />}
          />
          <Route
            path="/Crime"
            element={<Home search={search} language={language} q="Crime" />}
          />
          <Route
            path="/Science"
            element={<Home search={search} language={language} q="Science" />}
          />
          <Route
            path="/Tecnology"
            element={<Home search={search} language={language} q="Tecnology" />}
          />
          <Route
            path="/Entertainment"
            element={
              <Home search={search} language={language} q="Entertainment" />
            }
          />
          <Route
            path="/Sport"
            element={<Home search={search} language={language} q="Sport" />}
          />
          <Route
            path="/Cricket"
            element={<Home search={search} language={language} q="Cricket" />}
          />
          <Route
            path="/Health"
            element={<Home search={search} language={language} q="Health" />}
          />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/TermAndConditons" element={<TermAndConditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
