import { Metadata } from "next";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo para colaboraciones, proyectos o consultas',
  openGraph: {
    title: 'Contacto - Portafolio',
    description: 'Ponte en contacto conmigo para colaboraciones, proyectos o consultas',
    url: `${personalInfo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Contacto</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {personalInfo.github}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
            <div className="flex space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Envíame un mensaje</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu mensaje..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}