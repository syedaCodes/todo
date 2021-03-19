import React from 'react';
import Icons from '../assets/sprite.svg';
import Li from './Li';
import CallToAction from './CallToAction';

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
        this.reset = this.reset.bind(this);
    }

    componentDidMount(){

        //try catch to catch err for data like {12}
        try{
            //1. get the data from local storage
            const json = localStorage.getItem('data');

            //2. parse it from string to object
            const data = JSON.parse(json);

            //3. set state with the previous data
                //if data is not null
            if(data){
                this.setState({ data });
            }
        }
        catch(e){
            //Do nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState){

        //if array from props is not equal to array in state
        if(prevState.data.length !== this.state.data.length){
            //1. get data from state
            const json = JSON.stringify(this.state.data);
            //2. store in local storage
            localStorage.setItem('data', json);
        }
        
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

    reset(e){
        e.preventDefault();
        this.setState({ data: [], addClicked: true });
    }

    render(){

        return(
            <main>
                <CallToAction reset={this.reset}/>
                <div className="list">
                {this.state.addClicked ?
                <button className="plusBtn" onClick={e => {
                    e.preventDefault();
                    this.setState({addClicked: false})
                }}>
                    <svg className="plusSvg"><use xlinkHref={`${Icons}#icon-plus`}></use></svg>
                </button> :
                <form className="replaceDiv" onSubmit={this.handleInputChange}>
                    <input type="text" className="toDoField" autoComplete="off" name="inputField"/>
                    <button className="checkBtn">
                        <svg className="saveSvg"><use xlinkHref={`${Icons}#icon-check`}></use></svg>
                    </button>
                </form>}
                {(this.state.data)? <Li data={this.state.data} handleDelete={this.handleDelete}></Li>: null}
                </div>
            </main>
        );
    }
    
}

export default List;