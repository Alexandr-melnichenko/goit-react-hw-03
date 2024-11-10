import s from "./SearchBox.module.css";

const SearchBox = ({ searchValue, setSearchValue }) => {
  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className={s.searchBox}>
      <label>Find contacts by name</label>
      <input
        className={s.searchInput}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
