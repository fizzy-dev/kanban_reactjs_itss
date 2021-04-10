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

function Todo() {
  const [items, setItems] = React.useState([
    /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: true },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [filter, setFilter] = useState('all');

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

  function handleSubmitForm(formValues) {
    const newItems = [];
    const newItem = {
      key: getKey(),
      text: formValues.title,
      done: false
    }
    items.forEach((item) => {
      newItems.push(item)
    })
    newItems.push(newItem);
    setItems(newItems);
  }

  function handleFilterClick(value) {
    const newItems = { ...items }
    setFilter(value);
  }


  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <TodoFilter handleFilterClick={handleFilterClick}></TodoFilter>
      <TodoInput onSubmitt={handleSubmitForm}></TodoInput>

      {items.filter(item => {
        return (filter === 'all') || (filter === 'unactive' && item.done) || (filter === 'active' && !item.done)
      }).map(item => (
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