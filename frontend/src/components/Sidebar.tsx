import { useState, type JSX } from "react";
import { BsBookFill, BsBriefcaseFill, BsPeopleFill, BsPlus } from "react-icons/bs";

// 1. Defina a interface e os dados fora do componente
interface Group {
  id: number;
  name: string;
  members: number;
  icon: JSX.Element;
}

const groupData: Group[] = [
  { id: 1, name: 'Study Group', members: 8, icon: <BsPeopleFill /> },
  { id: 2, name: 'Book Club', members: 5, icon: <BsBookFill /> },
  { id: 3, name: 'Work Team', members: 12, icon: <BsBriefcaseFill /> },
];

// 2. Exporte o componente diretamente
export default function SideBar() {
  const [activeGroupId, setActiveGroupId] = useState<number>(1);

  return (
    <aside className="w-72 bg-white p-6 flex flex-col gap-6 border-r border-gray-200">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
        My Groups
      </h2>

      {/* Lista de Grupos */}
      <div className="flex flex-col gap-2">
        {groupData.map((group) => {
          const isActive = group.id === activeGroupId;

          return (
            <div
              key={group.id}
              onClick={() => setActiveGroupId(group.id)}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              {/* Ícone */}
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {group.icon}
              </div>

              {/* Nome e Membros */}
              <div>
                <p
                  className={`font-semibold ${
                    isActive ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {group.name}
                </p>
                <p className="text-sm text-gray-500">{group.members} members</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botão de Criar Grupo */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 p-2.5 rounded-lg border-2 border-dashed border-gray-300 text-gray-600 font-medium hover:bg-gray-100 hover:border-gray-400 transition-all">
        <BsPlus size={18} />
        Create Group
      </button>
    </aside>
  );
}