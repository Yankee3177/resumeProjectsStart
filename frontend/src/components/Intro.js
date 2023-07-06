import React, { useEffect, useState } from "react";
import { bio } from "./api";
import Projects from "./Projects";
import Tech from "./Tech";
import Contacts from "./Contacts";
import { NavBar } from "./NavBar";
import { Element } from 'react-scroll';
import '../App.css';

export default function Intro() {
  const [par, setPar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await bio().then(res => setPar(res.data)).catch(err => console.log(err));
    }

    fetchData();

  }, []);


  return (
    <main>
        <NavBar/>
        <Element name="introduction">
            <section>
            <h1 className="mainHeader">About me</h1>
            <p className="mainParagraphs">{par}</p>
            </section>
        </Element>

        <Element name="projects">
            <Projects />
        </Element>

        <Element name="tech">
            <Tech />
        </Element>

        <Element name="contacts">
            <Contacts />
        </Element>
        
    </main>
  );
}
