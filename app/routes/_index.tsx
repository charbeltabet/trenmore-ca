import { redirect, type LoaderFunctionArgs } from "react-router";

export function meta({ }) {
  return [
    { title: "Trenmore Convenience Store" },
    { name: "description", content: "Digital Experiences" },
  ];
}

export function loader({ }: LoaderFunctionArgs) {
  return {}
}

export default function Home({ }) {
  return (
    <div>
      Trenmore Home
    </div>
  )
}
