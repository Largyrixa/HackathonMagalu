import { BsStarFill } from "react-icons/bs";

// 1. Interface para definir a estrutura de dados de cada usuário no ranking
interface RankedUser {
  rank: number;
  name: string;
  avatarUrl: string;
  score: number;
  isCurrentUser?: boolean; // Propriedade opcional para identificar o usuário logado
}

// 2. Dados de exemplo (mock)
const rankedUsersData: RankedUser[] = [
  { rank: 1, name: 'Alex Rivera', avatarUrl: 'https://i.pravatar.cc/150?u=alex', score: 4.8 },
  { rank: 2, name: 'Emma Davis', avatarUrl: 'https://i.pravatar.cc/150?u=emma', score: 4.6 },
  { rank: 3, name: 'You', avatarUrl: 'https://i.pravatar.cc/150?u=you', score: 4.2, isCurrentUser: true },
  { rank: 4, name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/150?u=john', score: 3.9 },
];

export default function WeeklyRankings() {
    return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm max-w-md w-full font-sans">
      {/* Cabeçalho */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Weekly Rankings</h2>
          <p className="text-sm text-gray-500 mt-1">Week of January 20-26, 2025</p>
        </div>
        <select value={"Fitness Squad"} className="border border-gray-300 text-gray-500 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Fitness Squad</option>
          <option>Study Group</option>
          <option>Work Team</option>
        </select>
      </div>

      {/* Lista do Ranking */}
      <div className="flex flex-col gap-3">
        {rankedUsersData.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
              user.isCurrentUser ? 'bg-gray-100 border border-gray-300' : ''
            }`}
          >
            {/* Número do Rank */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                user.rank <= 2 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {user.rank}
            </div>

            {/* Avatar */}
            <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full" />

            {/* Nome */}
            <p className="font-medium text-gray-800 flex-grow">{user.name}</p>

            {/* Pontuação */}
            <div className="flex items-center gap-2">
              <BsStarFill className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-600">{user.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}