import React, {useContext} from 'react'
import resumePdf from '../assets/documents/Copy of Resume_ Niv Suroghon.pdf';

// context
import ResumeContext from '../context/ResumeContext';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Resume = () => {
  const {resumeData, isLoading} = useContext(ResumeContext);
  console.log(resumeData.education)

  return isLoading ? <h3>Loading...</h3> : (
    <div className='wrapper'>
      <Navigation />

      <main className="resume">
        <div className='resume__main'>
          <div className="resume__header">
              <h1>About Me...</h1>
            </div>
            <div className='resume__target'>
              <div className="education">
                <h2>Education.</h2>
                <ul>
                  {resumeData.education.map( (item) => 
                    <li>{item}</li>
                  )}
                </ul>
              </div>
              <div className="technology">
                <h2>Technology.</h2>
                <ul>
                {resumeData.technology.map( (item) => 
                    <li>{item}</li>
                  )}
                </ul>
              </div>
              <div className="concepts">
                <h2>Skills.</h2>
                <ul>
                {resumeData.skills.map( (item) => 
                    <li>{item}</li>
                  )}
                </ul>
              </div>
            </div>
        </div>
      
        <div className='download-box'>
          <a className="btn btn--landing btn--accent" href={resumePdf} target="_blank">Download Resume</a>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Resume