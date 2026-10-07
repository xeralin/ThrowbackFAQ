import { withBasePath } from "@/lib/asset";

export default function NotFound() {
  return <meta httpEquiv="refresh" content={`0; url=${withBasePath("/")}`} />;
}
