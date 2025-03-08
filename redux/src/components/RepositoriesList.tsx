/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchRepositories(term);
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
