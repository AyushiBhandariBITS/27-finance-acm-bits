export default function Header() {
    return (
      <header className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 border rounded-lg text-sm"
          />
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </header>
    );
  }
  