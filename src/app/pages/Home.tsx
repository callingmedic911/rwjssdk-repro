import { RequestInfo } from "@redwoodjs/sdk/worker";
import { TestClient } from "../components/TestClient";


export function Home({ ctx }: RequestInfo) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World</h1>
      <TestClient />
    </div>
  );
}

