import Header from './components/header/header'
import SearchPanel from "./components/search-panel";
// css стили
import "./index.css";

function App() {
    return (
        <section className="App">
            <Header />
            <SearchPanel/>
        </section>
    );
}

export default App;
