import { withBasePath } from "@/lib/asset";

type ContentVideoProps = {
  src: string;
  width: number;
  height: number;
};

export function ContentVideo({ src, width, height }: ContentVideoProps) {
  return (
    <video width={width} height={height} autoPlay loop muted playsInline>
      <source src={withBasePath(src)} type="video/webm" />
    </video>
  );
}
