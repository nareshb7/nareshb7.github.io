export interface ProjectCardProps {
  image: () => Promise<any>;
  title: string;
  description: string;
  url: string;
}
export interface ProjectData {
    id: number;
    image: () => Promise<any>;
    title: string;
    description: string;
    url: string;
}
