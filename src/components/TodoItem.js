/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item }) {
  return (
    <label className="panel-block">
      <input type="checkbox" />
      <div>{item.text}</div>
    </label>
  );
}

export default TodoItem;