import React from 'react'
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = { links: [] }
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       const links = this.state.links
       links.splice(index, 1)
       this.setState({links: links})
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({links: [...this.state.links, favLink]})
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table linkData={this.state.links} removeLink={this.handleRemove}/>
        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form newEntry={this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
