import React from 'react';

import Icons from '../assets/sprite.svg';

class List extends React.Component {

    state = {
        addClicked: true,
        inputState: '',
        data: []
    }; //Constructor

    onInputChange(event){
        event.preventDefault();
        console.log(this.state.inputState);
        console.log(event.target.elements);
       // const items = e.target.elements.item.value.trim(); 

        /**
         * let arrayItems = [...this.state.data];
    
        if(this.state.inputState !== ''){
            
            arrayItems.push(this.state.inputState);
            this.setState({addClicked: true, data: arrayItems });
        }
         */
    }

    render(){

        return(
            <div className="list">
                {this.state.addClicked ? <button className="plusDiv" onClick={() => this.setState({addClicked: false})}>
                    <svg className="plusBtn"><use xlinkHref={`${Icons}#icon-plus`}></use></svg>
                </button> : <form className="replaceDiv" onSubmit={this.onInputChange}>
            <input type="text" className="toDoField" autoComplete="off" name="item" value={this.state.inputState} onChange={(e) => this.setState({inputState: e.target.value})}/>
            <button className="checkDiv" >
            <svg className="saveBtn"><use xlinkHref={`${Icons}#icon-check`}></use></svg>
            </button>
        </form>}
        </div>
        );
    }
    
}

export default List;

/**
 *  {this.state.itemContent? this.state.itemContent : 'text'}

 * <input type="text" className="toDoField" value={this.state.itemContent} onChange={e => this.setState({itemContent: e.target.value})} />
 <div className="checkDiv">
                    <svg className="saveBtn"><use xlinkHref={`${Icons}#icon-check`}></use></svg>
                </div>
 * <ul>
                    
                    <li className="item"><input type="checkbox" className="checkInput" />
                    <a className="itemDone"><svg className="itemSvg done"><use xlinkHref={`${Icons}#icon-check`}></use></svg></a>
                    <a className="itemContent">abc</a>
                    <a className="itemDelete"><svg className="itemSvg del"><use xlinkHref={`${Icons}#icon-trash-o`}></use></svg></a>
                    </li>
                </ul>
 */