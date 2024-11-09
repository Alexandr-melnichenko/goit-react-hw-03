const SearchBox = ({ searchValue, setSearchValue }) => {
  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleChange} />
      <p>{searchValue}</p>
    </div>
  );
};

export default SearchBox;
