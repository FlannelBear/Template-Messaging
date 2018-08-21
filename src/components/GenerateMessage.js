import React from 'react';
import { connect } from 'react-redux';

import MessageBox from '../components/MessageBox';

const mapStateToProps = store => ({
    guests: store.guests,
    companies: store.companies,
    templates: store.templates,
});

class GenerateMessage extends React.Component{
    constructor(){
        super();
        this.state = {
            guest: {},
            company: {},
            template: {}
        }
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH'});
    }

    componentWillReceiveProps(nextProps){
        this.setState({guest: nextProps.guests[0], company: nextProps.companies[0], template: nextProps.templates[0]});
    }

    handleSelect = (event) => {
        switch(event.target.id){
            case 'guest':
                this.setState({[event.target.id]: this.props.guests[event.target.value]});
                break;
            case 'company':
                this.setState({[event.target.id]: this.props.companies[event.target.value]});
                break;
            case 'template':
                this.setState({[event.target.id]: this.props.templates[event.target.value]});
                break;
            default:
                break;
        }
    }

    submitChoices = () => {
        this.props.dispatch({type: 'POST_TEMPLATE_CHOICES', payload: this.state});
    }

    render(){
        const { guests, companies, templates } = this.props;
        console.log("rendering");
        return(
            <div>
                <h1>Select a guest, company, and template then press submit</h1>
                <select value={this.props.guests.indexOf(this.state.guest)} id="guest" onChange={this.handleSelect}>
                    {guests.map((guest, i)=>{
                        return <option key={i} value={i}>{guest.firstName} {guest.lastName}</option>
                    })}
                </select>
                <select value={this.props.companies.indexOf(this.state.company)} id="company" onChange={this.handleSelect}>
                    {companies.map((company, i)=>{
                        return <option key={i} value={i}>{company.company}</option>
                    })}
                </select>
                <select value={this.props.templates.indexOf(this.state.template)} id="template" onChange={this.handleSelect}>
                    {templates.map((template, i)=>{
                        return <option key={i} value={i}>{template.template.substr(0, 50)}</option>
                    })}
                </select>
                <button onClick={this.submitChoices}>Submit</button>
                {this.props.message ? <MessageBox message={this.props.message}/> : null}
            </div>
        );
    }
}

export default connect(mapStateToProps)(GenerateMessage);