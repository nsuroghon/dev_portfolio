import './styles/main.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import About from './pages/About';
import Landing from './pages/Landing';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        {/* <div className="App">
        hello world
        </div> */}
        <Route path='/projects' element={<Projects />}/>

        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
