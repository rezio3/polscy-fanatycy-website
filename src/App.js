import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import ImagesSection from "./components/imagesSection";
import MostReadSection from "./components/mostReadSection";
import Blog from "./components/blog";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<ImagesSection />
			<MostReadSection />
			<Blog />
		</div>
	);
}

export default App;
