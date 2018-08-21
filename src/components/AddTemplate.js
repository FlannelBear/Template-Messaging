import React from 'react';
import { connect } from 'react-redux';

class AddTemplate extends React.Component{
    constructor(){
        super();
        this.state = {template: 'greeting'}
    }

    handleButtonClick = (event) => {
        this.setState({template: this.state.template + event.target.value + " "});
    }

    handleTextFieldChange = (event) => {
        this.setState({template: event.target.value});
    }

    submitTemplate = () => {
        this.props.dispatch({type: 'POST_NEW_TEMPLATE', payload: this.state});
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({template: 'greeting'});
    }

    render(){
        const { template } = this.state;
        const guestButtonChoices = ['firstName', 'lastName', 'roomNumber', 'startTimestamp', 'endTimestamp'];
        const companyButtonChoices = ['company', 'city'];
        return(
            <div style={{textAlign: 'center'}}>
                <h3>Add a Template</h3>
                <p>Click a button to add a placeholder where values will be placed</p>
                <div>
                    <h4>Guest Button Choices</h4>
                    {guestButtonChoices.map((choice, i) => {
                        return (
                            <button key={i} style={{display: 'inline'}} value={choice} onClick={this.handleButtonClick}>
                                {choice}
                            </button>
                        );
                    })}
                    <h4>Company Button Choices</h4>
                    {companyButtonChoices.map((choice, i) => {
                        return (
                            <button key={i} style={{display: 'inline'}} value={choice} onClick={this.handleButtonClick}>
                                {choice}
                            </button>
                        );
                    })}
                </div>  
                <p>The template will start with "greeting", this is where the time of day based greeting will go</p>
                <textarea value={this.state.template} onChange={this.handleTextFieldChange} style={{width: 300, height: 100}}>{template}</textarea>
                <button onClick={this.submitTemplate} style={{backgroundColor: 'blue', color: 'white', display: 'block', margin: 'auto'}}>Submit</button>
            </div>
        );
    }
}

export default connect()(AddTemplate);