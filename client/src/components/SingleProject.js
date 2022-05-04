import React, { useContext, useEffect, useState } from 'react';
import { gsap } from "gsap";
import {Link} from 'react-router-dom';
import $ from 'jquery'; 
import * as Scroll from 'react-scroll';
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// components 
import Footer from '../components/Footer';
// context
import ProjectsContext from '../context/ProjectsContext';

const SingleProject = () => {
    const {projectSelected, removeProject} = useContext(ProjectsContext)

  // PAGE MOVEMENT MAGIC
  // var moveOffset = $(document).height();

  // function moveUp() {
  //   moveOffset = window.pageYOffset - $(window).height()/2;
  //   if (moveOffset < 0) {
  //     moveOffset = 0;
  //   }
  //   moveAround();
  // }

  // function moveDown() {
  //   moveOffset = window.pageYOffset + $(window).height()/2;
  //   var moveMax = ($(document).height() - $(window).height());
  //   if (moveOffset > moveMax) {
  //     moveOffset = moveMax;
  //   }
  //   moveAround();
  // }

  // function moveTop() {
  //   moveOffset = 0;
  //   moveAround();
  // }

  // function moveBottom() {
  //   moveOffset = ($(document).height() - $(window).height());
  //   moveAround();
  // }

  // function moveAround() {
  //   gsap.to(window, 1, { scrollTo: { y: moveOffset }, ease: "power4.out" });
  //   return false;
  // }
    // const scrollWindow = (x,y) => {
    //   window.scrollBy(x,y)
    // }

    // const scrollWindow = (x,y) => {
    //   window.scrollBy(x,y)
    // }
    const scrollUp = () => {
      window.scrollBy({
          top: -200,
          behavior: 'smooth'
      });
    };
    const scrollDown = () => {
      window.scrollBy({
          top: 200,
          behavior: 'smooth'
      });
    };

  return (
    <div className="featured">
      <div className="featured__content"> 
        <div className="featured__metatitle">
          <h2>SpaceX</h2>
        </div>
        <div className="featured__title">
          <h1>SpaceX - crew dragon displays</h1>
        </div>
        <p className='featured__description'>Principal UI/UX Designer working on the Crew Displays Team for SpaceX. Working with an all-star team of software engineers, operations engineers, and NASA astronauts I led the UI/UX design for the final 3 years of the project. They also trusted me enough to contribute code like a software engineer !!!</p>
        <div className='featured__more-info'>
          <p style={{"color": 'white'}}>Role:</p><p>Developer</p>
          <p style={{"color": 'white'}}>Agency:</p><p>SpaceX</p>
          <p style={{"color": 'white'}}>Year:</p><p>2020</p>
        </div>
        <div className="featured__images">
          <img src='http://fakeimg.pl/360x360/111/?text=2'></img>
        </div>
        {/* <div className="h1">{projectSelected.item.id}</div>
        <div className="h1">{projectSelected.item.title}</div>
        <div className="h1">{projectSelected.item.text}</div> */}
      </div>

      <div className='tools'>
        <div className="tool">
          <button onClick={scrollUp}>
            <span className='bar'></span>
            {/* <span className='bar'></span>
            <span className='bar'></span> */}
          </button>
        </div>
        <div className="tool">
          <a href='#' onClick={removeProject}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>
        </div>
        <div className="tool">
          <button onClick={scrollDown}>
            <span className='bar'></span>
            {/* <span className='bar'></span>
            <span className='bar'></span> */}
          </button >
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default SingleProject