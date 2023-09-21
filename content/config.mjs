const config = {
  defaultAuthor: "Luke Williams",
  search: {
    provider: "kbar"
  },
  showEditLink: true,
  editLinkRoot: "https://github.com/luckycold/my-blog/edit/main",
  navbarTitle: {
    logo: "https://filedn.com/li6XWfINaLQXBMsntum3ppB/Public%20Images/profile.png",
    text: "Luke's Data Garden",
    version: "Alpha",
  },
  navLinks: [
    { href: "/blog", name: "Blog" },
    {
      href: "https://wahwuh.com",
      name: "YouTube",
    },
  ],
  comments: {
    provider: "giscus",
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
    pages: ["blog"],
  },
}
export default config;
