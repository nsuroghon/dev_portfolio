import './styles/main.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

// context 
import {ProjectsProvider} from './context/ProjectsContext'
import FeatureProject from './pages/FeatureProject';

function App() {
  return (
    <ProjectsProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          {/* <div className="App">
          hello world
          </div> */}
          <Route path='/projects' element={<Projects />}/>

          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/featureProject' element={<FeatureProject />} />

        </Routes>
      </Router>
    </ProjectsProvider>
  );
}

export default App;
