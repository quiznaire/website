/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserWebsite = repository.endsWith(".github.io");

const basePath =
  isGitHubPages && !isUserWebsite ? `/${repository}` : "";

const nextConfig = isGitHubPages
  ? {
      output: "export",
      basePath,
      assetPrefix: basePath,
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
