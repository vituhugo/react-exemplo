import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card';

function App() {
    var source= "asdadsda.jpg"
    return (
        <div className="row">
            <Card titulo="Meu primeiro card" texto="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" imagem="https://cdn.meutimao.com.br/_upload/idolos-do-corinthians/vampeta.jpg" />
            <Card titulo="Segundo card" texto="Meu segundo card não tem Lorem Ipsum!" imagem="https://conteudo.imguol.com.br/c/esporte/3c/2018/03/28/vampeta-em-entrevista-ao-esporteponto-final-1522270771955_v2_450x337.jpg" />
            {/* <Card />
            <Card />
            <Card /> */}
        </div>
    );
}

export default App;
