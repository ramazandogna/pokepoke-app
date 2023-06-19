import { Route, Routes } from 'react-router-dom';

import Banner from './components/Banner';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Pokelist from './pages/Pokelist';
import Search from './pages/Search';

function App() {
   return (
      <div>
         <Header />
         <Banner />
         <div className="main-section">
            <div className="container">
               <Routes>
                  <Route
                     path="/"
                     element={<HomePage />}
                  />
                  <Route
                     path="/pokelist"
                     element={<Pokelist />}
                  />
                  <Route
                     path="/search"
                     element={<Search />}
                  />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
