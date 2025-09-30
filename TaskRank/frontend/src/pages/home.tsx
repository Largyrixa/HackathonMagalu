import Header from "../components/Header";
import SideBar from "../components/Sidebar";

export default function Home(){
    return(
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className="flex-1 p-6 bg-gray-50">
          {/* Conteúdo principal da página */}
          <h1>Página Principal</h1>
        </main>
      </div>
    </div>
    )
}