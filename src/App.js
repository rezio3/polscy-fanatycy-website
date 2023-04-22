import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import ImagesSection from "./components/imagesSection";
import MostReadSection from "./components/mostReadSection";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<ImagesSection />
			<MostReadSection />
		</div>
	);
}

export default App;
