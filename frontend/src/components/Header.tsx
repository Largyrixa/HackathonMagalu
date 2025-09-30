import { BsBellFill, BsPerson } from "react-icons/bs";

export default function Header() {
    return(
        <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Lado Esquerdo: Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-800">Task.er</span>
        </div>

        {/* Lado Direito: Navegação e Perfil */}
        <div className="flex items-center gap-8">
          {/* Links de Navegação */}
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Groups
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Rankings
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Tasks
              </a>
            </li>
          </ul>

          {/* Ícones de Ação */}
          <div className="flex items-center gap-5">
            <button className="text-gray-500 hover:text-gray-800">
              <BsBellFill size={24} />
            </button>
            <button className="flex items-center justify-center h-9 w-9 bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300">
              {/* Você pode substituir este ícone por uma tag <img> para a foto do usuário */}
              <BsPerson size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
    
