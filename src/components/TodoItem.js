import React, { useState } from 'react';

/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const { item, handleCheckboxClick } = props;
  const colors = [
    { green: '#61BD4F' },
    { yellow: '#F2D600' },
    { orange: '#FF9F1A' },
    { red: '#EB5A46' },
    { violet: '#C377E0' },
    { blue: '#0079BF' }];

  const [openPalete, setOpenPalete] = useState(false);

  const [openEdit,setOpenEdit]=useState(false);

  const [curColor, setCurColor] = useState('');

  const handleClickPalete = () => {
    const status = !openPalete;
    setOpenPalete(status);
  }

  const handleClickPaleteColor = (color) => {
    //setbackground 
    setCurColor(color.background);

    //close palete
    const status = !openPalete
    setOpenPalete(status);
  }

  const renderPaleteForm = () => {
    if (openPalete) {
      return (<div className="panel-optional">
        <div className="green-box" style={{ background: '#61BD4F' }} onClick={() => handleClickPaleteColor({ background: '#61BD4F' })}></div>
        <div className="yellow-box" style={{ background: '#F2D600' }} onClick={() => handleClickPaleteColor({ background: '#F2D600' })}></div>
        <div className="orange-box" style={{ background: '#FF9F1A' }} onClick={() => handleClickPaleteColor({ background: '#FF9F1A' })}></div>
        <div className="red-box" style={{ background: '#EB5A46' }} onClick={() => handleClickPaleteColor({ background: '#EB5A46' })}></div>
        <div className="violet-box" style={{ background: '#C377E0' }} onClick={() => handleClickPaleteColor({ background: '#C377E0' })}></div>
        <div className="white-box" style={{ background: '#ffffff' }} onClick={() => handleClickPaleteColor({ background: '#ffffff' })}></div>
        <div className="blue-box" style={{ background: '#0079BF' }} onClick={() => handleClickPaleteColor({ background: '#0079BF' })}></div>
      </div>)
    }
    else return
  }

  const handleClickEdit = () => {
    const status=!openEdit;
    setOpenEdit(status);
  }

  const renderEditForm =()=>{
    if(openEdit===false){
      
    }
  }

  return (
    <label className="panel-block" style={{ background: curColor }}>
      <div className="panel-content">
        <div className="todo-content">
          <input type="checkbox" onChange={() => handleCheckboxClick(item)} checked={item.done} />
          <span className={item.done ? 'has-text-grey-light' : ''}>
            {item.text}
          </span>
        </div>
        <div className="todo-palete" onClick={handleClickPalete}>
          <i className="fas fa-palette"></i>
        </div>
        <div className="todo-edit" onClick={handleClickEdit}>
          <i className="fas fa-pencil-alt"></i>
        </div>
        <div className="todo-delete">
          <i className="far fa-trash-alt"></i>
        </div>
      </div>
      {/* ket thuc noi dung cua mot todo */}
      {renderPaleteForm()}
      {/* cac action voi todo */}

    </label>
  )
}

export default TodoItem