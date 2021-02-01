/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React from 'react';

export default function QuizDaGaleraPage(props) {
  return (
    <div>
      Desafio da proxima aula

      <pre style={{ color: 'black' }}>
        {JSON.stringify(props, null, 4)}
      </pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://lolquiz.fabiodanilo1232.vercel.app/api/db')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });

  console.log('dbExterno', dbExterno);
  console.log('Infos do next', context.query.id);
  return {
    props: {
      dbExterno,
    },
  };
}
