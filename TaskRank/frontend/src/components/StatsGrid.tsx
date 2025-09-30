import { BsCheck2Circle, BsCheckCircle, BsStarFill, BsTrophy, BsTrophyFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import StatCard from "./StatCard";
import { AiFillCheckCircle } from "react-icons/ai";

// 1. Dados para cada card
const statsData = [
  {
    icon: <BsStarFill />,
    value: 4.2,
    label: 'Average Rating',
  },
  {
    icon: <AiFillCheckCircle />,
    value: 24,
    label: 'Tasks Completed',
  },
  {
    icon: <BsTrophyFill />,
    value: '3rd',
    label: 'Weekly Rank',
  },
  {
    icon: <FaMedal />,
    value: '2nd',
    label: 'Monthly Rank',
  },
];

export default function StatsGrid() {
    return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 2. Mapeando os dados para renderizar cada card */}
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}