import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/landing";
import "../global.scss";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar" },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export default function Index() {
  return (
    <div>
      <Landing />
    </div>
  );
}
