import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo(props) {
  const { listItems, title } = props

  const [items, setItems] = React.useState(listItems);

  const [showAddTaskForm, setShowAddTaskForm] = useState(true);

  //bat event click checkbox
  function handleCheckboxClick(item) {
    const newItems = [];
    items.forEach(e => {
      if (e.key === item.key) {
        newItems.push({ ...e, done: !e.done })
      } else {
        newItems.push(e)
      }
    })
    setItems(newItems);
  }

  //tao item moi 
  function createNewItem(title, value) {
    if (title === 'To Do') {
      const newItem = {
        key: getKey(),
        text: value,
        done: false,
        pending: true
      }
      return newItem
    }
    if (title === 'In Progress') {
      const newItem = {
        key: getKey(),
        text: value,
        done: false,
        pending: false
      }
      return newItem
    }
    if (title === 'Done') {
      const newItem = {
        key: getKey(),
        text: value,
        done: true,
        pending: false
      }
      return newItem
    }
  }

  function handleSubmitForm(formValues) {
    const newItems = [];
    const newItem = createNewItem(title, formValues.title);
    items.forEach((item) => {
      newItems.push(item)
    })
    newItems.push(newItem);
    setItems(newItems);

    setShowAddTaskForm(true);
  }

  function handleEditForm(item) {
    const newItems = [];
    items.forEach((e) => {
      if (e.key === item.key) {
        newItems.push(item);
      } else {
        newItems.push(e);
      }
    })
    setItems(newItems);
  }

  function handleDeleteForm(item) {
    const newItems = items.filter(x => x.key !== item.key);
    setItems(newItems);
  }

  const handleClickAddTask = () => {
    setShowAddTaskForm(!showAddTaskForm);
  }

  const renderAddTaskForm = () => {
    if (showAddTaskForm === true) {
      return (
        <div className="panel-block add-task-btn" onClick={handleClickAddTask}>
          <div className="add-btn-group">
            <i class="fas fa-plus item-add-1"></i>
            <p class="item-add-2">Add a task</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="panel-block">
          <TodoInput onSubmitt={handleSubmitForm}></TodoInput>
          <div className="cancel-add-task-in-form-btn" onClick={handleClickAddTask}>Cancel</div>
        </div>
      )
    }
  }


  return (
    <div className="panel">
      <div className="panel-heading">
        {title}
      </div>
      {items.map(item => (
        <TodoItem item={item}
          handleCheckboxClick={handleCheckboxClick}
          handleEditForm={handleEditForm}
          handleDeleteForm={handleDeleteForm}
        >
        </TodoItem>
      ))}
      {renderAddTaskForm()}
      <div className="panel-block count-item">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;