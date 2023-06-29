import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' exact element={<Intro/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
