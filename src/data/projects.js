import signalistImage from '../assets/signalist.png';
import talkloopImage from '../assets/talkloop.png';
//import hospitalImage from '../assets/hospital.svg';

export const projects = [
  {
    id: 'signalist',
    title: 'Signalist',
    description: 'Full-stack stock market tracking and alerts platform.',
    techStack: ['Next.js', 'MongoDB', 'Inngest'],
    image: signalistImage,
    link: '#',
    github: '#',
    details:
      'Built around watchlists, alerts, and event-driven workflows for tracking market movements in one place.',
  },
  {
    id: 'talkloop',
    title: 'TalkLoop',
    description: 'Real-time chat application with decoupled frontend and backend services.',
    techStack: ['React', 'Socket.io', 'Express'],
    image: talkloopImage,
    link: '#',
    github: '#',
    details:
      'Focused on low-latency messaging, room-based conversations, and a simple UI for conversation flow.',
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    description: 'Relational database system for hospital operations management.',
    techStack: ['Oracle SQL', 'PL/SQL', 'Database Design'],
   // image: hospitalImage,
    link: '#',
    github: '#',
    details:
      'Models hospital data, workflow automation, and normalized storage for practical database operations.',
  },
];

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}