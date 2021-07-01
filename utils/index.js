export const sortByDate = (a, b) =>
  new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
