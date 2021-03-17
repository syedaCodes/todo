import React from 'react';
import Icons from '../assets/sprite.svg';
import Li from './Li';

class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addClicked: true,
            inputState: '',
            data: []
        }; 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInputChange(event){
        event.preventDefault();
        const text = event.target.elements.inputField.value.trim();
        
        if(this.state.data.indexOf(text)> -1){
            alert('This to-do already exists'); 
            event.target.elements.inputField.value = "";
        }
        else if(!text){
            alert('Please enter a valid value');
        }
        else{
            this.setState((state) => {
                return {
                    data: state.data.concat(text),
                    addClicked: true,
                };
            });
        }
    }

    handleDelete(e){
        e.preventDefault();
        e.stopPropagation();
        const ele = e.target.parentNode.id;
        this.setState((state) => ({
                data: state.data.filter(item =>  ele !==item)
            })
        );
    }

    render(){

        return(
            <div className="list">
                {this.state.addClicked ?
                <button className="plusDiv" onClick={e => {
                    e.preventDefault();
                    this.setState({addClicked: false})
                }}>
                    <svg className="plusBtn"><use xlinkHref={`${Icons}#icon-plus`}></use></svg>
                </button> :
                <form className="replaceDiv" onSubmit={this.handleInputChange}>
                    <input type="text" className="toDoField" autoComplete="off" name="inputField"/>
                    <button className="checkDiv">
                        <svg className="saveBtn"><use xlinkHref={`${Icons}#icon-check`}></use></svg>
                    </button>
                </form>}
                {(this.state.data)? <Li data={this.state.data} handleDelete={this.handleDelete}></Li>: null}
            </div>
        );
    }
    
}

export default List;