import React from 'react';
import Icons from '../assets/sprite.svg';

class Li extends React.Component {

   render(){
        return(
            <ul>
                {this.props.data.map((item, index) => <li className="item" key={index}>
                <p className="itemContent">{item}</p>
                <p><input type="checkbox" className="checkDone"/></p>
                <p className="itemDelete" onClick={(e) => this.props.handleDeletion(e)}><svg className="del"><use xlinkHref={`${Icons}#icon-trash-o`}></use></svg></p></li>)}
            </ul>
            );
    }
};

export default Li;