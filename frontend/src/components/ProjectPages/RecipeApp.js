import { recipeApp } from "../api";
import { useEffect, useState } from "react";
import {Container, Row } from 'react-bootstrap';
import 'A:/Repos/resumeportnew/frontend/src/App.css';

export default function Recipe(){
    const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await recipeApp().then(res => setName(res.data)).catch(err => console.log(err));
    }

    fetchData();

  }, []);


  return (

    <section>
        <h1>{name}</h1>
        <Container>
          <Row>
            <img className='main-projects-Img' src="/images/recipe-app.png" alt="Recipe app screenshot"></img>
          </Row>
          <Row>
            <p className='app-descriptions'>
              This application demonstrates my knowledge of Python and SQL. On the python side,
              Tkinter was used to create and customize the gui. On the SQL side, all the data used
              in the application was stored on a local SQL database. The purpose of this application is to
              store recipes for different users. Users are allowed to add recipes, display their recipes and 
              if they're looking for a specific recipe they can enter the name of the recipe or if they
              don't fully remember the name they can use the name of an ingredient to search for the recipe.
              A dropdown menu is used to navigate between recipes.
              
            </p>
          </Row>
        </Container>


    </section>
  );


};