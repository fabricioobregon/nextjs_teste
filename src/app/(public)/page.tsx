import Image from 'next/image';

import axios from 'axios';

const url = "http://localhost:8080/api/userAll";

export async function getUsers() {

  const res = await axios.get(url);
  const valores = res.data;

  //console.log(valores);

  return valores;
}



export default function Home() {
  
  var fodase= 'teste do caraio';
  
  var valores = getUsers();

  return (
    
      <> Hellow world, {fodase} <br />
     <br />
     {valores.forEach((valor) => {valor})}
      </>

  );
}
