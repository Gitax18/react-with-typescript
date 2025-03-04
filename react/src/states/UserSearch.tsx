import { useState } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "gitanshu", age: 20 },
  { name: "tanay", age: 17 },
  { name: "shagun", age: 11 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>(undefined);

  function searchName(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    const searchUserIndex = users.findIndex((usr) => usr.name === name);
    if (searchUserIndex >= 0) setUser(users[searchUserIndex]);
    else setUser(undefined);
  }

  return (
    <div>
      <h3>Search The User</h3>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <input
          type="submit"
          className="button"
          onClick={searchName}
          value={"Search"}
        />
      </form>
      <div>
        {user ? (
          <div>
            <h4>User Details:</h4>
            <p>User Name: {user?.name}</p>
            <p>User Age: {user?.age}</p>
          </div>
        ) : (
          <h4>User does not exist </h4>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
