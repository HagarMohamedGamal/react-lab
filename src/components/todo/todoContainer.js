import React from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [
                "ccccc",
                "ccccc",
                "ccccc",
                "ccccc",
                "ccccc",
            ],
        };
    }
    AddItem = (newItems) => {
        console.log(newItems);
        this.setState({ Items: newItems });
    }
    RemoveItem = (index) => {
        console.log(index);
        this.state.allItems.splice(index, 1);
        console.log(this.state.allItems);
        this.setState({ Items: this.state.allItems });
    }

    handleChang() {
        console.log("changed");

    }
    render() {
        const { allItems } = this.state;
        return <>
            <div className="container m-5 border border-danger rounded w-50 py-5 bg-info">
                <div className="justify-content-center">
                    <h1 className="text-center font-weight-bold text-uppercase">TODO App</h1>
              
                    <TodoList allItems={allItems} removeItem={this.RemoveItem} />
                    <TodoForm allItems={allItems} addItem={this.AddItem} />
                </div>
            </div>
        </>;
    }
}
export default TodoContainer;
