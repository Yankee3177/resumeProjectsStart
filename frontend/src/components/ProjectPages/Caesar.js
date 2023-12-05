import { caesarEncrypt } from "../api";
import { useEffect, useState } from "react";
import {Container, Row } from 'react-bootstrap';
import 'A:/Repos/resumeportnew/frontend/src/App.css';

export default function CaesarEncryption(){
    const [par, setPar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await caesarEncrypt().then(res => setPar(res.data)).catch(err => console.log(err));
    }

    fetchData();

  }, []);


  return (

    <section>
        <h1>{par}</h1>
        <Container>
          <Row>
            <img className='main-projects-Img' src="/images/caesar-encryption.png" alt="Caesar Encryption program screenshot"></img>
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