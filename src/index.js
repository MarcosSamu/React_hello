import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function nome_final(user){
	return user.nome_1 + ' ' + user.nome_2;
}

const user = {
	nome_1 : "Marcos",
	nome_2: "Samuel"
};

const element = (
	<div>
		<h1>Hello, {nome_final(user)} </h1>
		<h2>Bom Trabalho</h2>
	    <h2>It is {new Date().toLocaleTimeString()}.</h2>
	</div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
