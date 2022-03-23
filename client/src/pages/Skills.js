import React from 'react'
import Navigation from '../components/Navigation'
import Data from '../data';

const Skills = () => {
  return (
    <div className="skills">
      <Navigation />

      <div className="skills__main-container">
         <div className="skills__section-box">
            <h1 className='skills__header'><span>Education</span></h1>
            <div className="skills__data">
              {
                Data.education && Data.education.map((item)=>{
                  return(
                    <div className="">
                       <div className="">
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
        <div className="skills__section-box">
          <h1 className='skills__header'><span>Skills</span></h1>     
            <div className="skills__data">
              {
                Data.work && Data.work.map((item) => {
                  return(
                    <div className="">
                       <div className="">
                          <h3>{item.CompanyName}</h3>
                          <p className="">
                          {item.specialization}
                          <span>&bull;</span> <em className="">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
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
         <p><a href="" target="_blank">FULL RESUME</a></p>
      </div>
    </div>
  )
}

export default Skills