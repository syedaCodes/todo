import React from 'react';
import Icons from '../assets/sprite.svg';

class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addClicked: true,
            inputState: '',
            data: []
        }; 

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        event.preventDefault();
       // const text = this.state.inputState;
        //console.log(text);
        this.setState(state => {
            const data = state.data.concat(this.state.inputState);
            return {
                data,
                inputState: '',
                addClicked: true,
            };
        });
        console.log(this.state.data);
    }

    handleOnChange(event){
        event.preventDefault();
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
                <form className="replaceDiv" onSubmit={e => this.handleOnChange(e)}>
                    <input type="text" className="toDoField" autoComplete="off" name="item" value={this.state.inputState} onChange={(e) => this.setState({inputState: e.target.value})}/>
                    <button className="checkDiv" onClick={this.onInputChange}>
                        <svg className="saveBtn"><use xlinkHref={`${Icons}#icon-check`}></use></svg>
                    </button>
                </form>}
                <ul>
                    {(this.state.data).length > 0 ? (this.state.data).map((item, index) => <li className="item" key={index}>{item}</li>): null}
                </ul>
            </div>
        );
    }
    
}

export default List;
