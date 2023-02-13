
import './App.css';
import Announcement from './Components/Announcement';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Products from './Components/Products';
import Slider from './Components/Slider';



function App() {
  return (
    <div className="App">
      <Announcement/>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
     <Newsletter/>
     <Footer/>
    </div>
  );
}

export default App;
