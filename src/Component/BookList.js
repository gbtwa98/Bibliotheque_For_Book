import React, { Component } from 'react'
import BookItem from './BookItem'
class BookList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdite} = this.props;
        return (
            <div>
                <ul className="list-group my-5">
                    <h2 className="text-capitalize text-center">
                        <span class="badge badge-pill badge-success">Book List</span>
                    </h2>
                    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6><center>Title</center></h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success">Edit</span>
                        <span className="mx-2 text-danger">Remove</span>
                    </div>
                    </li>
                    {items.map(item => {
                        return <BookItem
                         key={item.id}
                         title={item.title}
                         handleDelete={()=>handleDelete(item.id)}
                         handleEdite={()=> handleEdite(item.id)}
                         />
                    })}
                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={clearList}
                    > Clear Book</button>
                </ul>
            </div>
        )
    }
}

export default BookList;