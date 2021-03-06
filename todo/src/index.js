import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Components/ToDo';

class App extends React.Component {
    
   render(){
        return (
            <ToDo />
       );
   }
};

ReactDOM.render(<App />,document.querySelector('#root'));