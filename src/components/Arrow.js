
function Arrow(props) {
  const { item, leftArrow, rightArrow, onClickArrow } = props;

  // hien thi muiten trai phai
  const renderArrowForm = () => {
    if (item.done === true && item.pending === false) {
      return (
        <div className="left-arrow" onClick={handleClickLeftArrow}>
          <i class="fas fa-arrow-left"></i>
        </div>
      )
    }
    if (item.done === false && item.pending === false) {
      return (
        <div className='group-arrow-btn'>
          <div className="left-arrow" onClick={handleClickLeftArrow}>
            <i class="fas fa-arrow-left"></i>
          </div>
          <div className="right-arrow" onClick={handleClickRightArrow}>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      )
    }
    if (item.done === false && item.pending === true) {
      return (
        <div className="right-arrow" onClick={handleClickRightArrow}>
          <i class="fas fa-arrow-right"></i>
        </div>
      )
    }
  }

  const handleClickLeftArrow = () => {
    leftArrow(item);
    //close 
    onClickArrow();
  }

  const handleClickRightArrow = () => {
    rightArrow(item);
    onClickArrow();
  }

  return (
    <div className="todo-arrow item5">
      {renderArrowForm()}
    </div>
  );
}

export default Arrow;