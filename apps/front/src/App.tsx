import { useEffect } from "react";
import { trpc } from "./utils/trpc";

function App() {
  const { isFetching, isError, data, isFetched } = trpc.hello.useQuery({
    text: "client",
  });
  useEffect(() => {
    if (isFetched) console.log(data);
  }, [isFetching, isError, data]);

  if (isError) return <p>Error</p>;

  if (isFetching || !data) return <div>Loading...</div>;

  return (
    <div className="App">
      <p>{data.greeting}</p>
    </div>
  );
}

export default App;
