import './App.css'

import { useEffect } from "react";

function App() {
  useEffect(() => {
      window.location.replace("https://lisogroup.com");
  }, []);

  return (
    <div className='app'    >
      <p>
        Redirecting to{" "}
        <a href="https://lisogroup.com">lisogroup.com</a>...
      </p>
    </div>
  );
}


export default App
