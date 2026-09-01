import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <>
      <Hero
        tag="Error 404"
        corner="404"
        title={
          <>
            Page <em>Not Found</em>
          </>
        }
        description="The page you are looking for does not exist or has moved."
      />
      <Prose>
        <p>
          Try the <Link href="/">home page</Link> or pick a section from the
          sidebar.
        </p>
      </Prose>
    </>
  );
}
