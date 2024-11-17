import { useState } from "react";
import "./App.css";
import { FollowMouse } from "./components/FollowMouse";

function App() {
  const [mounted, setMounted] = useState(true);
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Togglemounted FollowMouse component
      </button>
    </main>
  );
}

export default App;
