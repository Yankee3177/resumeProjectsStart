import React, {useEffect, useState} from "react";
import { bio } from "./api";


export default function Intro(){

    const [par,setPar] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            await bio().then(res => setPar(res.data)).catch(err => console.log(err));
        }

        fetchData();
    },"");



    return(
        <section id="introduction">
        
        <h1>About me</h1>
        <p>{par}</p>
        
        </section>
    );
}