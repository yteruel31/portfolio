export type Article = {
  title: string;
  _createdAt: string;
  id: string;
  category: {
    name: string;
  };
  slug: string;
  content: any;
};
