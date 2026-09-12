import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { LuSunMedium } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="navBar">
        <header className="menu">
          <div>
            <MdVerifiedUser className="icons" />
          </div>
          <div>
            <Link href="#">Features</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Team</Link>
            <Link href="#">Contact</Link>
            <Link href="#">FAQ</Link>
          </div>
          <div className="icon">
            <LuSunMedium className="icons" />
            <TbBrandGithub className="icons" />
          </div>

          <button className="hamb"><FiAlignJustify />
</button>
        </header>
      </div>
      <main className="hero">
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
