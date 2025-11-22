import { data, LoaderFunctionArgs, Link, useLoaderData } from "react-router";

export async function loader({ params }: LoaderFunctionArgs) {
  const splat = params["*"];
  const parts = splat ? splat.split("/") : [];

  return data({ parts });
}

export default function CatchAll() {
  const { parts } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/" className="underline text-blue-500">
        Home
      </Link>
    </div>
  );
}
