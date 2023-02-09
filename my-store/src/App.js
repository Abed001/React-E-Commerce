
import './App.css';
import Announcement from './Components/Announcement';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';



function App() {
  return (
    <div className="App">
      <Announcement/>
     <Navbar/>
     <Slider/>
     <Categories/>
    </div>
  );
}

export default App;
