import React, { Component } from 'react'

class BookItem extends Component {
    render() {
        const {title, handleDelete, handleEdite} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                <span className="mx-5 text-success" onClick={handleEdite}>
                        <i className="fas fa-pen" />
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}

export default BookItem;