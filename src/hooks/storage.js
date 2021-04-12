import { useState, useEffect } from 'react';
// import {getKey} from '../lib/'

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

function useStorage() {
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
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setItems(JSON.parse(data));
    }
    
  }, []);

  const putItems = items => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems  (items);
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
  };

  return [items, putItems, clearItems];
}

export default useStorage;