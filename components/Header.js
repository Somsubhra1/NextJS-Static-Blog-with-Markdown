import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container"></div>
      <Link href="/" passHref>
        <h2>Dev Blog</h2>
      </Link>
    </header>
  );
}
