import React from "react"
export default props => (
  <div>
    <h2>Details</h2>
    <div className="btn-group" role="group">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.loadListPage}
      >
        Back to List
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => props.delete(props.item.id)}
      >
        Delete
      </button>
    </div>
    <legend>{props.item.title}</legend>
    <div className="card">
      <div className="card-body">{props.item.content}</div>
    </div>
  </div>
)