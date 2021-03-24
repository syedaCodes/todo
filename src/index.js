import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Components/ToDo';
import './style.css';

class App extends React.Component {
    
   render(){
        return (
            <ToDo />
       );
   }
};

ReactDOM.render(<App />,document.querySelector('#root'));