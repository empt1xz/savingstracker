"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { LuSunMedium } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [open, isOpen] = useState(false);

  function Toggle() {
    isOpen(!open);
  }

  return (
    <>
      <header>
        <h1>Shadcn</h1>
        <nav>
          <Link href="/">Features</Link>
          <Link href="/">Testimonials</Link>
          <Link href="/">Team</Link>
          <Link href="/">Contact</Link>
          <Link href="/">FAQ</Link>
        </nav>
        <div className="icons">
          <LuSunMedium size={24} />
          <TbBrandGithub size={24} />
        </div>
        <div className="responsive">
          {open ? (
            <X size={24} onClick={Toggle} />
          ) : (
            <Menu size={24} onClick={Toggle} />
          )}
        </div>

        {open ? (
          <>
            <div className="menuResponsive">
              <div>
                <Link href="/">Features</Link>
                <Link href="/">Testimonials</Link>
                <Link href="/">Team</Link>
                <Link href="/">Contact</Link>
                <Link href="/">FAQ</Link>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </header>

      <main className="hero">
        <div className="bar">
          <Link href="#">New</Link>
          <Link href="#">Design is out now!</Link>
        </div>
        <h1>
          {" "}
          <span>Experience</span> the shadcn landing page{" "}
        </h1>
        <p>
          We're more than just a tool, we're a community of passionate creator.
          Get, access to exclusive resources, tutorials, and support.
        </p>
        <div className="github">
          <button>
            get started <FaArrowRightLong />
          </button>
          <button>github respository</button>
        </div>
      </main>
    </>
  );
}
