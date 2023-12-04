import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Recipe from './components/RecipeApp';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' exact element={<Intro/>} />
          <Route path='/recipeApp' exact element={<Recipe/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
// /recipeApp is what I'm going to use for the link tag in the image containers, that's basically
// what's going to be the determinant for the page that is going to load