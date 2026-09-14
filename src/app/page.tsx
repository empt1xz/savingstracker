"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { LuSunMedium } from "react-icons/lu";
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
      
          <div className="illumination"></div>

        <section className="texts">
          <h1>Experience</h1>
          <h1>
            The <span>Shadcn</span> landing page
          </h1>

          <p>
            We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resrouces, tutorials, and support.
          </p>
        </section>
    
      </main>
    </>
  );
}
