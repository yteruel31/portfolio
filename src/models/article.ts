export type Article = {
  title: string;
  _createdAt: string;
  id: string;
  category: {
    name: string;
  };
  slug: string;
  content: any;
  seo: {
    title: string;
    description: string;
    image: { url: string; width: number; height: number };
  };
};
