const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
