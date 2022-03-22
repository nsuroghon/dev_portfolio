import React from 'react'
import Navigation from '../components/Navigation'

import Data from '../data';

const Skills = () => {
  return (
    <div>
      <Navigation />

      <div id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                Data.education && Data.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                Data.work && Data.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <p style={{textAlign: "center",}}><a href="https://docs.google.com/document/d/1fvsFLHUKN0NHJ3oStc2KjUgiI8EBjdxI23G7Hx-ZGH0/edit?usp=sharing" target="_blank">FULL RESUME</a></p>
         {/* <Button variant="secondary" size="sm">
      Small button
    </Button> */}
      </div>
    </div>
  )
}

export default Skills