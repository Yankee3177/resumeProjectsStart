import { caesarEncrypt } from "../api";
import { useEffect, useState } from "react";
import 'A:/Repos/resumeportnew/frontend/src/App.css'

export default function CaesarEncryption(){
    const [par, setPar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await caesarEncrypt().then(res => setPar(res.data)).catch(err => console.log(err));
    }

    fetchData();

  }, []);


  return (

    <main>
        <p>{par}</p>


    </main>
  );


};