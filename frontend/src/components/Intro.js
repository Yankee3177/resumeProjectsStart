import React, {useEffect, useState} from "react";
import { bio } from "./api";
import Projects from "./Projects";
import Links from "./Links";
import Contacts from "./Contacts";
import '../App.css';


export default function Intro(){

    const [par,setPar] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            await bio().then(res => setPar(res.data)).catch(err => console.log(err));
        }

        fetchData();
    },[]);



    return(
        <main className="App-header">
        <section id="introduction">
        
            <h1 className="mainHeader">About me</h1>
            <p className="mainParagraphs">{par}</p>
            
           
        
        </section>
        <Projects/>
        <Links/>
        <Contacts/>

        </main>
    );
}

//In the return statement just call all the functions in the component folder