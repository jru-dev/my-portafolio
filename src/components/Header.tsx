import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Mi Portafolio
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Proyectos
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              Sobre Mí
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}