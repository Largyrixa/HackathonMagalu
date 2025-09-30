import Header from "../components/Header";
import RecentSubmissions from "../components/RecentSubmissions";
import Sidebar from "../components/Sidebar";
import SideBar from "../components/Sidebar";
import StatsGrid from "../components/StatsGrid";
import WeeklyRankings from "../components/WeeklyRankings";

export default function Home(){
    return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <StatsGrid />

          <div className="flex flexx-row justify-between mx-10">
            <div className="mt-6">
              {/* Adicione o componente de envios recentes aqui */}
              <RecentSubmissions />
            </div>

            <div className="mt-6">
              {/* Adicione o componente de envios recentes aqui */}
              <WeeklyRankings />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}