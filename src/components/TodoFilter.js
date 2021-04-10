/* 
  【Filterコンポーネント】
 ・該当するTodoをステータス毎にで分けてリスト表示する
 ・タブで表示する
 ・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function TodoFilter(props) {
  const { handleFilterClick } = props;


  return (
    <div className="panel-tabs">
      <ul>
        <li>
          <p onClick={() => handleFilterClick("all")}>All</p>
        </li>
        <li>
          <p onClick={() => handleFilterClick("active")}>Active </p>
        </li>
        <li>
          <p onClick={() => handleFilterClick("unactive")}>UnActive</p>
        </li>
      </ul>
    </div>
  );
}

export default TodoFilter