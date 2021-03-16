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
        this.onInputChange = this.onInputChange.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
    }

    onInputChange(event){
        event.preventDefault();
        
        if(this.state.inputState){
            this.setState(state => {
                const data = state.data.concat(this.state.inputState);
                return {
                    data,
                    inputState: '',
                    addClicked: true,
                };
            });
        }
        else{
            alert("Please enter a valid value.");
        }
    }

    handleDeletion(e){
        e.preventDefault();
        this.setState(state => {
            return{
                data: []
            };
        })
        console.log((this.props.data));
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
                <form className="replaceDiv" onSubmit={e => this.onInputChange(e)}>
                    <input type="text" className="toDoField" autoComplete="off" name="item" value={this.state.inputState} onChange={(e) => this.setState({inputState: e.target.value})}/>
                    <button className="checkDiv">
                        <svg className="saveBtn"><use xlinkHref={`${Icons}#icon-check`}></use></svg>
                    </button>
                </form>}
                {(this.state.data)? <Li data={this.state.data} handleDeletion={this.handleDeletion}></Li>: null}
            </div>
        );
    }
    
}

export default List;