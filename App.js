
import './App.css';
import React from 'react';
//import {text, view, button} from 'react-native';

export default class App extends React.Component {
  estado = {
      valor: 0,
      vezes: 0
  }


acrescentar = () => {
  this.setState({
    valor: this.state.valor + 1,
    veses_tocadas: this.state.vezes + 1

  })
  console.log(this.state.valor + 1)
}

  render () {
    return(
    
        <div>
          <text>  0   </text>
          <text> clicadas no total </text>
          <button onClick={this.acrescentar} title="adição"/>
        </div>
  );
    };
  
  }