import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {name: "", URL: ""}
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       let name = event.target.name
       switch(name){
           case "name":
                this.setState({
                    "name": event.target.value
                })
            break;
            case "URL":
                this.setState({
                    "URL": event.target.value
                })
            break;
            default:
                console.error("invalid name")
                break
       }
       console.log(this.state)
    }
    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       let entry = {name: this.state.name, URL: this.state.URL}
        this.props.newEntry(entry)
    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>URL</label>
                <input type="text" name="URL" value={this.state.URL} onChange={this.handleChange}/>
                <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;
