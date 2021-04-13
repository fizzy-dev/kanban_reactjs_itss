import React, { useState, useEffect } from 'react';
import useStorage from './hooks/storage'
import { getKey } from "./lib/util";


/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';

function App() {
  const [items, putItems, clearItems] = useStorage();

  // const initItems = [
  //   /* テストコード 開始 */
  //   { key: getKey(), text: 'day la mot memo', done: true, pending: false, color: '' },
  //   { key: getKey(), text: 'day cung la mot memo', done: true, pending: false, color: '' },
  //   { key: getKey(), text: 'lam bai tap reactjs', done: true, pending: false, color: '' },
  //   { key: getKey(), text: 'day la mot project', done: false, pending: false, color: '' },
  //   { key: getKey(), text: 'xong truoc buoi chieu thu 2', done: false, pending: false, color: '' },
  //   { key: getKey(), text: 'bat dau lam thoi', done: false, pending: true, color: '' },
  //   { key: getKey(), text: 'xong task 1', done: false, pending: true, color: '' },
  //   { key: getKey(), text: 'xin chao cac ban', done: false, pending: true, color: '' },
  //   { key: getKey(), text: 'xin chao  ban', done: false, pending: true, color: '' }
  //   /* テストコード 終了 */
  // ]

  //lưu trữ vào storage

  const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('itss-todo')));


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
    setListItems(newListItems);
    //lưu vào local storage
    putItems(newListItems)

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

  const AppHandleSetColor = (item) => {
    const newListItems = [];
    listItems.forEach(e => {
      if (e.key === item.key) {
        newListItems.push(item);
      }
      else {
        newListItems.push(e);
      }
    })

    setListItems(newListItems);
    //lưu vào local storage
    putItems(newListItems)

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

  const appHandleSubmitForm = (item) => {
    const newListItems = [...listItems];
    newListItems.push(item);
    setListItems(newListItems);

    // lưu vào local storage
    putItems(newListItems)

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

  const appHandleEditTodo = (item) => {
    const newListItems = [];
    listItems.forEach((e) => {
      if (e.key === item.key) {
        newListItems.push(item);
      } else {
        newListItems.push(e);
      }
    })

    setListItems(newListItems);
    //lưu vào local storage
    putItems(newListItems)

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

  const appHandleDeleteTodo = (item) => {
    const newListItems = listItems.filter(x => x.key !== item.key);
    setListItems(newListItems);
    //lưu vào local storage
    putItems(newListItems)

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
    <div>
      <h2 class='panel-header' style={{ textAlign: 'center', fontSize:50}} id='title-header'>看板アプリ</h2>
      <div className="container">
        <div className=" panel-1">
          <Todo
            listItems={pendingItems}
            title="To Do"
            handleClickArrow={handleClickArrow}
            AppHandleSetColor={AppHandleSetColor}
            appHandleSubmitForm={appHandleSubmitForm}
            appHandleEditTodo={appHandleEditTodo}
            appHandleDeleteTodo={appHandleDeleteTodo} />
        </div>
        <div className=" panel-2">
          <Todo
            listItems={doingItems}
            title="In Progress"
            handleClickArrow={handleClickArrow}
            AppHandleSetColor={AppHandleSetColor}
            appHandleSubmitForm={appHandleSubmitForm}
            appHandleEditTodo={appHandleEditTodo}
            appHandleDeleteTodo={appHandleDeleteTodo}
          ></Todo>
        </div>
        <div className=" panel-3">
          <Todo
            listItems={doneItems}
            title="Done"
            handleClickArrow={handleClickArrow}
            AppHandleSetColor={AppHandleSetColor}
            appHandleSubmitForm={appHandleSubmitForm}
            appHandleEditTodo={appHandleEditTodo}
            appHandleDeleteTodo={appHandleDeleteTodo}
          ></Todo>
        </div>
      </div>
    </div>
  );
}

export default App;
