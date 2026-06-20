import Link from "next/link";
import { personalInfo, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className="text-xl text-gray-600">{personalInfo.title}</p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {personalInfo.description}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link 
            href="/projects" 
            className="text-blue-600 hover:underline"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </section>
    </div>
  );
}