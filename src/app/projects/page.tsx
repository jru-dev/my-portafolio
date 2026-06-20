import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora todos los proyectos de desarrollo web',
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora todos los proyectos de desarrollo web',
    url: 'https://tuportafolio.com/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Todos los Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}