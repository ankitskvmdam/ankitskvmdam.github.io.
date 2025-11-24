export type TFrontmatter = {
  title: string;
  summary: string;
  thumbnail?: string;
  date: string;
  status: "draft" | "published";
  type: "blog" | "project";
};
