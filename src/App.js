import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import ImagesSection from "./components/imagesSection";
import MostReadSection from "./components/mostReadSection";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<ImagesSection />
			<MostReadSection />
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
