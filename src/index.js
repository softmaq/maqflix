import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import CadastroVideo from './pages/cadastro/video';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import CadastroCategoria from './pages/cadastro/categoria';

/*
function CadastroVideo() {
  return (
    <div>
      Pagina Cadastro de Video
    </div>
  );
}
*/

const Pagigina404 = () => (
  <div>Pagina nao encontrada: 404 - Not Found</div>
) 

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {Home} exact /> 
      <Route path = "/cadastro/video" component = {CadastroVideo} /> 
      <Route path = "/cadastro/categoria" component = {CadastroCategoria} />       
      <Route component = {Pagigina404} exact /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

