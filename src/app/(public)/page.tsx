import Image from 'next/image';

import axios from 'axios';

const url = "http://localhost:8080/api/userAll";

export async function getUsers() {

  const res = await axios.get(url);
  const valores = res.data;

  console.log(res.data);

  const dados = valores;
  const chaves = dados[0];
  const arrayDeUsuarios = dados.slice(1);

  const usuarios = arrayDeUsuarios.map(item => {
    return item.reduce((obj, valor, index) => {
      obj[chaves[index]] = valor;
      return obj;
    }, {});
  });

  console.log(usuarios);

  return usuarios;
}



export default function Home() {
  
  var hello_var= 'Este é um teste de string simples';
  
  var valores = getUsers();

  return (
    
      <> Hellow world, {hello_var} <br />
     <br />
     {console.log(valores)}
      </>

  );
}
