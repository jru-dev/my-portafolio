import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}