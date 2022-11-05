function Sort() {
  return (
    <div className="sort">
      <div className="sort__label">
        {/* <svg /> */}
        <b>Sorting by:</b>
        <span>popularity</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">popularity</li>
          <li>price</li>
          <li>alphabetical</li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
