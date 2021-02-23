import './App.css';
import Header from "./Components/Header/Header";
import MainCarousel from "./Components/MainCarousel/MainCarousel";
import ArticleNews from "./Components/ArticleNews/ArticleNews";
import MatchSchedule from "./Components/MatchSchedule/MatchSchedule";
import HighlightWeek from "./Components/HighlightWeek/HighlightWeek";
import PodCast from "./Components/PodCast/PodCast";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <div className="container-fluid px-0">
            <Header></Header>
            <MainCarousel></MainCarousel>
            <MatchSchedule></MatchSchedule>
            <ArticleNews></ArticleNews>
            <PodCast></PodCast>
            <HighlightWeek></HighlightWeek>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
}

export default App;
