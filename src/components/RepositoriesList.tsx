import { useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const inputRef = useRef(null);
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    searchRepositories(term);
  };

  useEffect(() => {
    if (!inputRef) return;
  }, []);

  return (
    <>
      <h3>This is repositories List</h3>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} ref={inputRef} />
        <button style={{ marginLeft: "2px" }}>Search</button>
      </form>
      {loading && <p>Loading....</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && data && data.map((name, index) => <p key={index}>{name}</p>)}
    </>
  );
};

export default RepositoriesList;
