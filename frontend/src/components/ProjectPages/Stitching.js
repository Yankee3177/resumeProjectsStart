import { stitchingDesign } from "../api";
import { useEffect, useState } from "react";
import {Container, Row } from 'react-bootstrap';
import 'A:/Repos/resumeportnew/frontend/src/App.css';

export default function Stitch(){
    const [par, setPar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await stitchingDesign().then(res => setPar(res.data)).catch(err => console.log(err));
    }

    fetchData();

  }, []);


  return (

    <section>
        <h1>{par}</h1>
        <Container>
          <Row>
            <img className='main-projects-Img' src="/images/stitching-design.png" alt="Stitching Design screenshot"></img>
          </Row>
          <Row>
            <p className='app-descriptions'>
              This application demonstrates my knowledge of Python.
              
            </p>
          </Row>
        </Container>


    </section>
  );


};