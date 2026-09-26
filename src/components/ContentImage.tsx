import Image from "next/image";
import { withBasePath } from "@/lib/asset";

type ContentImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ContentImage({
  src,
  alt,
  width,
  height,
  className,
}: ContentImageProps) {
  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
