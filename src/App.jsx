import CategoryLists from "./components/CategoryLists";
import HomePageItems from "./components/HomePageItems";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryLists />
      <HomePageItems />
    </div>
  );
}

export default App;
