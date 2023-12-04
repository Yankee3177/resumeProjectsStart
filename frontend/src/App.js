import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Recipe from './components/ProjectPages/RecipeApp';
import Stitch from './components/ProjectPages/Stitching';
import SqlInt from './components/ProjectPages/Sqlinterface';
import CaesarEncryption from './components/ProjectPages/Caesar';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' exact element={<Intro/>} />
          <Route path='/recipeApp' exact element={<Recipe/>} />
          <Route path='/sqlInterface' exact element={<SqlInt/>} />
          <Route path='/stitchingDesign' exact element={<Stitch/>} />
          <Route path='/caesarEncrypt' exact element={<CaesarEncryption/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
// /recipeApp is what I'm going to use for the link tag in the image containers, that's basically
// what's going to be the determinant for the page that is going to load