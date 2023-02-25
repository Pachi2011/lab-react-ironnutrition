// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchQuery, setSearchQuery}) {

const handleSearch = (event) => {
  setSearchQuery(event.target.value)
}

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchQuery} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;