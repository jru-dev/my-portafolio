import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={80}
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}