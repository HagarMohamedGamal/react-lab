import React from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component{
    render() {
        return (
            <div className="border border-white rounded bg-light p-5">
              <h2 className="font-weight-bold text-uppercase">Items List</h2>
              <ul className="list-group">
                  {this.props.allItems.map((item,i)=>
                  <TodoItem key={i} index={i} itemData={item} removeItem={this.props.removeItem}/>
                  )}
              </ul>
          </div>
        );
    }
  }
export default TodoList;
  