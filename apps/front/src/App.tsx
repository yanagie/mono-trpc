import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { trpc } from "./utils/trpc";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const mutation = trpc.createUser.useMutation();

  const { isError, isInitialLoading, isSuccess, data, error } =
    trpc.getUser.useQuery({
      userId: 1,
    });
  const createNewUser = (name: string, email: string) => {
    mutation.mutate({
      name,
      email,
    });
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {isInitialLoading ? (
        <p>loading</p>
      ) : isSuccess ? (
        <div className="align-start">
          <p>id: {data?.id}</p>
          <p>username: {data?.name}</p>
          <p>email: {data?.email}</p>
        </div>
      ) : isError ? (
        <p>{error.message}</p>
      ) : null}
      <div className="divider" />

      <div>
        <p className="hint">ユーザー名</p>
        <input
          type="text"
          className="w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="hint">メールアドレス</p>
        <input
          type="text"
          className="w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="card">
          <button onClick={() => createNewUser(username, email)}>
            create user
          </button>
        </div>

        {mutation.isLoading ? (
          <p>loading</p>
        ) : mutation.isSuccess ? (
          <div className="align-start">
            <p>id: {mutation.data.id}</p>
            <p>username: {mutation.data.name}</p>
            <p>email: {mutation.data.email}</p>
          </div>
        ) : mutation.isError ? (
          <p>{mutation.error.data?.code}</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
