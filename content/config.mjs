const config = {
  defaultAuthor: "Luke Williams",
  search: {
    provider: "kbar"
  },
  showEditLink: true,
  editLinkRoot: "https://github.com/luckycold/my-blog/edit/main",
  navbarTitle: {
    logo: "https://filedn.com/li6XWfINaLQXBMsntum3ppB/Public%20Images/profile.png",
    text: "Luke's Mind Garden",
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
      repo: process.env."luckycold/my-blog",
      repositoryId: process.env."R_kgDOKWJZ6Q",
      category: process.env."General",
      categoryId: process.env."DIC_kwDOKWJZ6c4CZf-e",
    },
    pages: ["blog"],
  },
}
export default config;
