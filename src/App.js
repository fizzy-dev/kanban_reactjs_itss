import React, { useState } from 'react';
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

  const [doingItems,setDoingItems]=useState(
    listItems.filter((item) => {
      return item.done === false && item.pending === false
    })
  )

  const [doneItems,setDoneItems]=useState(
    listItems.filter((item) => {
      return item.done === true && item.pending === false
    })
  )


  return (
    <div className="container is-fluid">
      <Todo listItems={pendingItems} title="DO"/>
      <Todo listItems={doingItems} title="DOING"></Todo>
      <Todo listItems={doneItems} title="DONE"></Todo>
    </div>
  );
}

export default App;
