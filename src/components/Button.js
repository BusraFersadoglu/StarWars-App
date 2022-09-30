function Button({ fetchData, isNextPageButtonDisabled, isPrevPageButtonDisabled }) {
  return (
    <div className="button-container">
      <button
        disabled={isPrevPageButtonDisabled}
        onClick={()=> fetchData({type: "prev"})}
        className="button-tag main"
      >
        Previous Page
      </button>
      <button
        disabled={isNextPageButtonDisabled}
        onClick={()=> fetchData({type: "next"})}
        className="button-tag main"
      >
        Next Page
      </button>
    </div>
  );
}

export default Button;
