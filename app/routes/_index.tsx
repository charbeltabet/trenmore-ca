import { redirect, type LoaderFunctionArgs } from "react-router";

export function meta({ }) {
  return [
    { title: "Tabet.tech" },
    { name: "description", content: "Digital Experiences" },
  ];
}

export function loader({ }: LoaderFunctionArgs) {
  return redirect('https://charbeltabet.com')
}

export default function Home({ }) {
  return (
    <>Redirecting...</>
  )
}
