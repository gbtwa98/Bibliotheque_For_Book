import React, { Component } from 'react'

class BookInput extends Component {
    render() {
        const {item ,handlechange ,handleSubmit ,editItem } = this.props;
        return (
           <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" 
                            placeholder="Add New Book "
                            value={item}
                            onChange={handlechange}
                        />
                    </div>
                    <button type="submit" className={
                        editItem
                        ? "btn btn-block btn-success mt-2"
                        : "btn btn-block btn-primary mt-2"
                    }>
                    {editItem ? "Edit Book" : 'Add Book'}
                    </button>
                </form>
           </div>
        )
    }
}

export default BookInput;