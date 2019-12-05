import React, { Component } from 'react';
import BookInput from './Component/BookInput';
import BookList from './Component/BookList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state= {
    items : [],
    id : uuid(),
    item : "",
    editItem : false
  };
  handlechange = (e) =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id : this.state.id,
      title : this.state.item
    }
      console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items : updatedItems,
      item : "",
      id : uuid(),
      editItem : false
    })

  };
  clearList = () =>{
    this.setState({
      items :[]
    })
  }
handleDelete = (id) => {
   const filteredItems = this.state.items.filter(item =>
    item.id !==id)
    this.setState({
      items : filteredItems
    });
};
handleEdite = (id) => {
  const filteredItems = this.state.items.filter(item =>
    item.id !==id)

    const selectedItem = this.state.items.find(item => item.id ===id)

    this.setState({
      items : filteredItems,
      item : selectedItem.title,
      editItem : true,
      id : id
    });
};
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h2 className="text-capitalize text-center">
              <a href="/" class="badge badge-info">Book Input</a>
              </h2>
          <BookInput 
          item={this.state.item} 
          handlechange={this.handlechange} 
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
           />
          <BookList 
          items={this.state.items} 
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdite={this.handleEdite}
          />
            </div>
          </div>
      </div>
    )
  }
}

export default App;