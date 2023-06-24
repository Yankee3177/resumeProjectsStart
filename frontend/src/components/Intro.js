import React, {useEffect, useState} from "react";
import { bio } from "./api";
import Projects from "./Projects";
import Links from "./Links";
import Contacts from "./Contacts";


export default function Intro(){

    const [par,setPar] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            await bio().then(res => setPar(res.data)).catch(err => console.log(err));
        }

        fetchData();
    },"");



    return(
        <main>
        <section id="introduction">
        
            <h1>About me</h1>
            <p>{par}</p>
        
        </section>
        <Projects/>
        <Links/>
        <Contacts/>

        </main>
    );
}

//In the return statement just call all the functions in the component folder