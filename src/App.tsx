import Navbar from "./components/Navbar";
import Routing from "./routing/Routing";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="header">
        <Navbar />
      </div>
      <main className="flex-grow bg-gray-50">
        <Routing />
      </main>
    </div>
  );
}

export default App;
