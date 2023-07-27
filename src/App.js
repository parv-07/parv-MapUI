import '../src/App.css';
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  RouteObject,
} from 'react-router-dom';
import Slidebar from './components/Slidebar';
import { filterProperties } from '@turf/turf';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import profile from './pages/profile';
import MapComponent from './my-app/myMap';
function App() {
  return (
    <>
      <Navbar />
      <MapComponent />
      <Slidebar />
      <Footer />
    </>
  );
}

export default App;
