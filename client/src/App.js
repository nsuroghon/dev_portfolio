import './styles/main.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// context 
import {ProjectsProvider} from './context/ProjectsContext'
import {ResumeProvider} from './context/ResumeContext'


function App() {
  return (
    <ProjectsProvider>
    <ResumeProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ResumeProvider>
    </ProjectsProvider>
    
  );
}

export default App;
