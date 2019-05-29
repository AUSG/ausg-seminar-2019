import React, { Component } from "react"
import Details from "./Details"
import Amplify, { API } from "aws-amplify"
import aws_exports from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react"
Amplify.configure(aws_exports)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
      title: "",
      item: {},
      showDetails: false
    }
  }
  handleChange = event => {
    const id = event.target.id
    this.setState({ [id]: event.target.value })
  }
  handleSubmit = async event => {
    event.preventDefault()
    await API.post("todoAPI", "/items", {
      body: {
        id: Date.now().toString(),
        title: this.state.title,
        content: this.state.content
      }
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
    this.setState({ content: "", title: "" })
  }
  loadDetailsPage = async id => {
    const response = await API.get("todoAPI", "/items/" + id)
    this.setState({ item: { ...response }, showDetails: true })
  }
  
  delete = async id => {
    //TODO: Implement functionality
  }
  render() {
    return (

      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <legend>Add</legend>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              placeholder="Content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <hr />
        {this.state.showDetails && (
          <Details
            item={this.state.item}
            delete={this.delete}
          />
        )}
      </div>
    )
  }
}
export default withAuthenticator(App, true)
