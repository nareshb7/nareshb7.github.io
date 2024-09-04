import { ProjectData } from './types';

export const projectConfig: ProjectData[] = [
  {
    id: 1,
    image:  () => import('assets/simple-chat-app-welcome.webp'),
    title: 'Chat Application',
    description: 'Simple Chat Application with friends and groups',
    url: 'https://simple-chatapplication.netlify.app/',
    techStack: ["React", "Node JS", "Express JS", "Mongo DB", "Socket.io", "React Bootstrap", "Redux Toolkit and Thunk"]
  },
  {
    id: 2,
    image: () => import('assets/task-tracker.webp'),
    title: 'Task Tracker',
    description: 'Used to track daily tickets',
    url: 'https://ticket-task-tracker.netlify.app',
    techStack: ["React", "Node JS", "Express JS", "Mongo DB", "Socket.io","nodemailer", "formik", "redux"]
  },
  {
    id: 3,
    image: () => import('assets/socio-media-home.webp'),
    title: 'Socio Media',
    description: 'Linkedin like application we can post content, lie posts,  add friends',
    url: 'https://socio-media-app.netlify.app',
    techStack: ["React", "Node JS", "Express JS", "Mongo DB", "Socket.io","Material UI","jwt"]
  },
  {
    id: 4,
    image: () => import('assets/guess-the-number.webp'),
    title: 'Guess the number',
    description: 'U have to guess the correct number that was generated in between 1 to 100',
    url: 'https://guessthenumbergame1.netlify.app/',
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    image: () => import('assets/react-beginner-projects.webp'),
    title: 'React Beginner Projects',
    description: 'There is 20 react beginner projects like todo app, weather app and etc.',
    url: 'https://nareshb7.github.io/react-projects',
    techStack: ["React", "Node", "Express", "TypeScript", "Tailwind CSS", "SASS"]
  },
  {
    id: 6,
    image: () => import('assets/insta-share.webp'),
    title: 'Insta Share',
    description: 'Its similar like a chat application, but works on basis of room id\'s, no authentication needed, even u can share files upto 3mb',
    url: 'https://instant-file-share.netlify.app/',
    techStack: ["React", "Node JS", "Express JS", "Mongo DB", "Socket.io","TypeScript", "SASS"]
  },
];
