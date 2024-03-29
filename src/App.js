import Dropdown from "./components/Dropdown";
import { useState } from 'react';

function App() {
  const [selection, setSelection] = useState(null); // [1
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "A Shade of Blue", value: "blue" },
  ];
  return <Dropdown options={options} onChange={handleSelect} value={selection} />
}

export default App;

