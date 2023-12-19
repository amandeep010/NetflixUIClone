import './App.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import TvShows from './Component/TvShows';
import Movies from './Component/Movies';
import RecentlyAdded from './Component/RecentlyAdded';
import Mylist from './Component/Mylist';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tvshows' element={<TvShows/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/recentlyadded' element={<RecentlyAdded/>}/>
        <Route path='/mylist' element={<Mylist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
