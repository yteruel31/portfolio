import { ResponsiveImageType } from 'react-datocms';

export type Project = {
  demourl: string;
  description: string;
  inprogress: boolean;
  images: { responsiveImage: ResponsiveImageType }[];
  name: string;
  order: number;
  repositoryurl: string;
  stacks: {
    name: string;
  }[];
};
