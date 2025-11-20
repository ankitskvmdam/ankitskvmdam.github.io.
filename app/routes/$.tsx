import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const splat = params["*"];
  const parts = splat ? splat.split("/") : [];

  return json({ parts });
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
