import React from 'react';
import Icons from '../assets/sprite.svg';

class Li extends React.Component {

   render(){
        return(
            <ul>
                {this.props.data.map((item) => <li className="item" name="todo" id={item} key={item}>
                <p className="itemContent">{item}</p>
                <p><input type="checkbox" className="checkDone"/></p>
                <p className="itemDelete" onClick={this.props.handleDelete}><svg className="del"><use xlinkHref={`${Icons}#icon-trash-o`}></use></svg></p></li>)}
            </ul>
            );
    }
};

export default Li;