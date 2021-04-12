import React, { useState, useEffect } from 'react';
import { getKey } from "./lib/util";


/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';

function App() {

  const [listItems, setListItems] = useState([
    /* テストコード 開始 */
    { key: getKey(), text: 'day la mot memo', done: true, pending: false },
    { key: getKey(), text: 'day cung la mot memo', done: true, pending: false },
    { key: getKey(), text: 'lam bai tap reactjs', done: true, pending: false },
    { key: getKey(), text: 'day la mot project', done: false, pending: false },
    { key: getKey(), text: 'xong truoc buoi chieu thu 2', done: false, pending: false },
    { key: getKey(), text: 'bat dau lam thoi', done: false, pending: true },
    { key: getKey(), text: 'xong task 1', done: false, pending: true },
    { key: getKey(), text: 'xin chao cac ban', done: false, pending: true },
    { key: getKey(), text: 'xin chao  ban', done: false, pending: true }
    /* テストコード 終了 */
  ]);

  const [pendingItems, setPendingItems] = useState(
    listItems.filter((item) => {
      return item.done === false && item.pending === true
    })
  )

  const [doingItems, setDoingItems] = useState(
    listItems.filter((item) => {
      return item.done === false && item.pending === false
    })
  )

  const [doneItems, setDoneItems] = useState(
    listItems.filter((item) => {
      return item.done === true && item.pending === false
    })
  )




  const handleClickArrow = (item) => {
    const newListItems = [];
    listItems.forEach((e) => {
      if (e.key === item.key) {
        newListItems.push(item);
      } else {
        newListItems.push(e);
      }
    })

    // console.log(newListItems);

    setListItems(newListItems);
    setDoingItems(newListItems.filter(item => {
      return item.pending === false && item.done === false
    }))

    setPendingItems(newListItems.filter(item => {
      return item.pending === true && item.done === false
    }))

    setDoneItems(newListItems.filter(item => {
      return item.pending === false && item.done === true
    }))
  }


  return (
    <div className="container is-fluid">
      <Todo listItems={pendingItems} title="To Do" handleClickArrow={handleClickArrow} />
      <Todo listItems={doingItems} title="In Progress" handleClickArrow={handleClickArrow}></Todo>
      <Todo listItems={doneItems} title="Done" handleClickArrow={handleClickArrow}></Todo>
    </div>
  );
}

export default App;
