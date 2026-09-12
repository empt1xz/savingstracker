import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <main>
        <div className="bar">
          <a href="#">New</a>
          <a href="#">Design is out now?</a>
        </div>
        <h1> Experience the shadcn landing page </h1>
        <p>
          We're more than just a tool, we're a community of passionate creator.
          Get, access to exclusive resources, tutorials, and support.
        </p>
        <button>
          get started <FaArrowRightLong />
        </button>
        <button>github respository</button>
      </main>
    </>
  );
}
