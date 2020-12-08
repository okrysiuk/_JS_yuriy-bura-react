import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

export default class App extends Component {
  itemId = 100;

  state = {
    todoData: [
      this.createTodoItem("Learn React"),
      this.createTodoItem("Drink coffee"),
      this.createTodoItem("Read book"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.itemId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData];
      newArr.splice(idx, 1);
      return { todoData: newArr };
    });
    /*
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx +1)];
    */
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  /*
  onToggleChangeProperty(arr, id, propName){
  
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]}
      return [
      ...arr.slice(0, idx), newItem, ...arr.slice(idx +1)
      ];
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: onToggleChangeProperty(todoData, id, 'done')
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: onToggleChangeProperty(todoData, id, 'important')
      };
    });
  }
  */

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
