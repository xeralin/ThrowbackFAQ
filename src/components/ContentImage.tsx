import Image from "next/image";
import { withBasePath } from "@/lib/asset";

type ContentImageProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

export function ContentImage({
  src,
  width,
  height,
  className,
}: ContentImageProps) {
  return (
    <Image
      src={withBasePath(src)}
      alt=""
      width={width}
      height={height}
      className={className}
    />
  );
}
