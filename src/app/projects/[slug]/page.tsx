import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

// Los props se reciben como un objeto con params y searchParams
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  // Esperamos a que se resuelva params
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      url: `https://tuportafolio.com/projects/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

// La página también recibe params como Promise
export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-xl text-gray-600">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {project.demoUrl && (
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Ver Demo
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}