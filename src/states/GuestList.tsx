import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]); // specifying type of useState value

  function addGuest() {
    setGuest([...guest, name]);
  }

  return (
    <div>
      <h3>Guest List</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={addGuest}>Add List</button>
      <div>
        {guest.map((gue) => (
          <p>{gue}</p>
        ))}
      </div>
    </div>
  );
};

export default GuestList;
