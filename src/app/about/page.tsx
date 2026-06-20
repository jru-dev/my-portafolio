import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: 'Conoce más sobre mi experiencia y habilidades como desarrollador',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Sobre Mí</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{personalInfo.name}</h2>
          <p className="text-xl text-gray-600">{personalInfo.title}</p>
          <p className="text-gray-700">{personalInfo.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Habilidades</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Desarrollo Full Stack</li>
            <li>• React / Next.js</li>
            <li>• TypeScript / JavaScript</li>
            <li>• Diseño Responsive</li>
          </ul>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Email: {personalInfo.email}</li>
            <li>• GitHub: {personalInfo.github}</li>
            <li>• LinkedIn: {personalInfo.linkedin}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}