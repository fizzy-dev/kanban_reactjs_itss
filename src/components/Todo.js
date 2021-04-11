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
  function createNewItem(title,value){
    if(title==='DO'){
      const newItem = {
        key: getKey(),
        text: value,
        done: false,
        pending:true
      }
      return newItem
    }
    if(title==='DOING'){
      const newItem = {
        key: getKey(),
        text: value,
        done: false,
        pending:false
      }
      return newItem
    }
    if(title==='DONE'){
      const newItem = {
        key: getKey(),
        text: value,
        done: true,
        pending:false
      }
      return newItem
    }
  }

  function handleSubmitForm(formValues) {
    const newItems = [];
    const newItem= createNewItem(title, formValues.title);
    items.forEach((item) => {
      newItems.push(item)
    })
    newItems.push(newItem);
    setItems(newItems);
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        {title}
      </div>
      <TodoInput onSubmitt={handleSubmitForm}></TodoInput>

      {items.map(item => (
        <TodoItem item={item}
          handleCheckboxClick={handleCheckboxClick}>
        </TodoItem>
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;