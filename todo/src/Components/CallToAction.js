import React from 'react';

class CallToAction extends React.Component{
    
    render(){
        return(
            <div className="btnsList">
                <button className="pick" >Pick a task</button>
                <button className="reset" onClick={this.props.reset}>Reset</button>
            </div>
        );
    }
}

export default CallToAction;