import React, { useState } from 'react';
/* 
  【inputコンポーネント】
 ・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
 ・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function TodoInput(props) {
  const { onSubmitt } = props;
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    //cancel reload form
    e.preventDefault();

    const formValues = {
      title: value
    }

    onSubmitt(formValues);
    setValue('');
  }

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="input todo" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoInput;
