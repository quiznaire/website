/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserWebsite = repository.endsWith(".github.io");
const hasCustomDomain = Boolean(process.env.GITHUB_PAGES_CUSTOM_DOMAIN);

const basePath =
  isGitHubPages && !isUserWebsite && !hasCustomDomain ? `/${repository}` : "";

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
