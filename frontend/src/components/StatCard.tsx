import type { JSX } from "react";

// 1. Definindo as propriedades que o card vai receber
interface StatCardProps {
  icon: JSX.Element;
  value: string | number;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps){

    return(
    <div className="bg-white p-5 rounded-lg border border-gray-200 flex items-center gap-4 shadow-sm">
      {/* Container do Ícone */}
      <div className="bg-gray-100 p-4 text-gray-700 rounded-lg">
        {icon}
      </div>

      {/* Container do Texto */}
      <div>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}