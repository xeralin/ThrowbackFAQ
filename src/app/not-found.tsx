import type { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
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
  );
}
