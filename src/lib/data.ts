import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'Hotline miami',
    description: 'Plataforma de comercio para Miami',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: 'Metro Lima Go',
    description: 'Aplicación de gestión de tareas para metro de Lima',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
  },
  {
    slug: 'weather-dashboard',
    title: 'Web nexus',
    description: 'Dashboard interactivo con gamificacion',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Azanero Vidal',
  title: 'Dev Ops Developer',
  description: 'Haciendo paginas para poder comer',
  email: 'jru@gmail.com',
  github: 'https://github.com/jru-dev',
  linkedin: 'https://linkedin.com/in/jru-dev',
  siteUrl: 'https://tuportafolio.com',
  avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};