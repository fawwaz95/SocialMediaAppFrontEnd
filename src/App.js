import Navigation from './components/Navigation';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Navigation />
      <div className="flex-1 overflow-y-auto">
        <Homepage />
      </div>
    </div>
  );
}

export default App;