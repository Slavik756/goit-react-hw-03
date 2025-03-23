import style from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={style.searchBoxWrapper}>
      <label htmlFor="searchInput" className={style.searchLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="searchInput"
        value={value}
        onChange={onChange}
        className={style.searchInput}
      />
    </div>
  );
};

export default SearchBox;
