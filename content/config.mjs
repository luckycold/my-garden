const config : {
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
      repo:"luckycold/my-blog",
      repo-id:"R_kgDOKWJZ6Q",
      category:"General",
      category-id:"DIC_kwDOKWJZ6c4CZf-e",
      mapping:"pathname",
      strict:"0",
      reactions-enabled:"1",
      emit-metadata:"0",
      input-position:"bottom",
      theme:"preferred_color_scheme",
      lang:"en",
      crossorigin:"anonymous",
    },
    pages: ["blog"],
  },
}
export default config;
