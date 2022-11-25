import { useEffect } from "react";
import { trpc } from "./utils/trpc";

function App() {
  const { isFetching, isError, data, isFetched } = trpc.getUser.useQuery({
    userId: 1,
  });
  const mutation = trpc.createUser.useMutation();
  // const { isFetching, isError, data, isFetched } = trpc.hello.useQuery({
  //   text: "client",
  // });
  const createNewUser = () => {
    const salt = Math.random().toString().substring(2, 6);
    mutation.mutate({
      email: `poepoe${salt}@gmail.com`,
      name: `poepoe${salt}`,
    });
  };

  useEffect(() => {
    console.log({ mutation });
  }, [mutation]);

  useEffect(() => {
    if (isFetched) console.log(data);
  }, [isFetching, isError, data]);

  if (isError) return <p>Error</p>;

  if (isFetching || !data) return <div>Loading...</div>;

  return (
    <div className="App">
      <p>user with id 1: {data.name}</p>
      <button onClick={createNewUser}>create user</button>
      {mutation.isSuccess ? (
        <p>
          created user: {mutation.data.id}, {mutation.data.name},
          {mutation.data.email}
        </p>
      ) : (
        <p>error: {mutation.error?.message}</p>
      )}
      {/* <p>{data.greeting}</p> */}
    </div>
  );
}

export default App;
