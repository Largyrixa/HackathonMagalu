import { BsStar, BsStarFill } from "react-icons/bs";
import foto1 from "../assets/Foto1.jpg"
import foto2 from "../assets/Foto2.jpg"

// 1. Definindo a interface para os dados de um envio
interface Submission {
  id: number;
  taskTitle: string;
  userName: string;
  userAvatarUrl: string; // URL para a imagem do avatar
  timeAgo: string;
  rating: number;
  taskPhotoUrl?: string; // URL da foto da tarefa, opcional
}

// 2. Dados de exemplo (mock)
const submissionData: Submission[] = [
  {
    id: 1,
    taskTitle: "Study Session - Biotecnologia",
    userName: 'Sarah Johnson',
    userAvatarUrl: 'https://i.pravatar.cc/150?u=sarah', // Usando um placeholder
    timeAgo: '2 hours ago',
    rating: 4.5,
    taskPhotoUrl: foto1,
  },
  {
    id: 2,
    taskTitle: 'Study Session - Matemática',
    userName: 'Mike Chen',
    userAvatarUrl: 'https://i.pravatar.cc/150?u=mike', // Usando um placeholder
    timeAgo: '4 hours ago',
    rating: 3.8,
    taskPhotoUrl: foto2,
  },
];

export default function RecentSubmissions() {
    return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full">
      {/* Cabeçalho */}
      <div className="flex items-center px-3 justify-between mb-5">
        <h3 className="text-xs font-bold text-gray-800">Recent Task Submissions</h3>
        <a href="#" className="text-sm ml-20 font-medium text-blue-600 hover:underline">
          View All
        </a>
      </div>

      {/* Lista de Envios */}
      <div className="flex flex-col gap-6">
        {submissionData.map((submission) => (
          <div key={submission.id}>
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <img
                src={submission.userAvatarUrl}
                alt={submission.userName}
                className="w-12 h-12 rounded-full border-2 border-white shadow"
              />

              {/* Info da Tarefa */}
              <div className="flex-grow">
                <p className="font-bold text-gray-900">{submission.taskTitle}</p>
                <p className="text-sm text-gray-500">
                  {submission.userName} &bull; {submission.timeAgo}
                </p>
              </div>

              {/* Nota */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <BsStarFill className="w-5 h-5 text-gray-400 fill-current" />
                <span className="font-bold text-gray-700">{submission.rating}</span>
              </div>
            </div>

            {/* Foto da Tarefa */}
            <div className="mt-3 ml-16 w-[calc(100%-4rem)] h-40 bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src={submission.taskPhotoUrl}
                alt={`${submission.taskTitle} photo`}
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
