import React, { useContext, useEffect, useState } from 'react';
import { gsap } from "gsap";
import {Link} from 'react-router-dom';
import $ from 'jquery'; 
import * as Scroll from 'react-scroll';
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Tools from './Tools';
// components 
import Footer from '../components/Footer';
// context
import ProjectsContext from '../context/ProjectsContext';

const SingleProject = () => {
    const {projectSelected, removeProject} = useContext(ProjectsContext)
    console.log(projectSelected);
    // page movement
    // const scrollUp = () => {
    //   window.scrollBy({
    //       top: -200,
    //       behavior: 'smooth'
    //   });
    // };
    // const scrollDown = () => {
    //   window.scrollBy({
    //       top: 200,
    //       behavior: 'smooth'
    //   });
    // };

  return (
    <div className="featured">
      <div className="featured__content"> 
        {/* <div className="featured__metatitle">
          <h2>SpaceX</h2>
        </div> */}
        <div className="featured__title">
          {/* <h1>SpaceX - crew dragon displays</h1> */}
          <h1>{projectSelected.item.title}</h1>
        </div>
        <div className='featured__description'>
          {/* Principal UI/UX Designer working on the Crew Displays Team for SpaceX. 
          Working with an all-star team of software engineers, operations engineers, 
          and NASA astronauts I led the UI/UX design for the final 3 years of the project.
         They also trusted me enough to contribute code like a software engineer !!! */}
          <p>{projectSelected.item.text}</p>
        </div>
        <div className='featured__more-info'>
          <p className='type'>Role:</p><p>{projectSelected.item.role}</p>
          <p className='type'>Agency:</p><p>{projectSelected.item.agency}</p>
          <p className='type'>Year:</p><p>{projectSelected.item.year}</p>
        </div>
        <div className="featured__images">

          {
            projectSelected.item.images.map( (image) => {
              return (
                <img src={image}></img>
              )
            })
          }
          {/* <img src='/assets/images/sample_1_new.jpg'></img>
          <img src='/assets/images/Dev_Web_2.jpg'></img> */}

        </div>
        {/* <div className="h1">{projectSelected.item.id}</div>
        <div className="h1">{projectSelected.item.title}</div>
        <div className="h1">{projectSelected.item.text}</div> */}
      </div>
      
      <Tools />
      {/* <Tools /> */}

      {/* <div className='tools'>
        <div className="tool">
          <a onClick={scrollUp}>
            <span className='bar'></span>
          </a>
        </div>
        <div className="tool">
          <a href='#' onClick={removeProject}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>
        </div>
        <div className="tool">
          <a onClick={scrollDown}>
            <span className='bar'></span>
          </a >
        </div>
      </div> */}

      {/* <Footer /> */}

    </div>
  )
}

export default SingleProject