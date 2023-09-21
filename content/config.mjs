const config = {
  title: "Lucky!",
  description: "Luke's Mind",
  author: "Luke Williams",
  defaultAuthor: "Luke Williams",
  domain: "https://doc.1al.cc",
  logo: "",
  search: {
    provider: "kbar"
  },
  showEditLink: true,
  showComments: true,
  editLinkRoot: "https://github.com/luckycold/my-blog/edit/main",
  navbarTitle: {
    text: "Luke's Digital Garden",
    version: "Alpha",
  },
  navLinks: [
    { href: "/blog", name: "Blog" },
    { href: "/_all", name: "All" },
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
  social: [
    { label: "github", href: "https://github.com/luckycold/my-garden" },
    { label: "discord", href: "https://discord.gg/7UGcvKzBeP" },
    { label: "youtube", href: "https://wahwuh.com" },
  ],
  twitter: {
      handle: "@wahwuhRAW",
      site: "https://doc.1al.cc",
      cardType: "summary_large_image",
    },
}
export default config;
