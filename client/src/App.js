import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    getGames();
  }, []);

  const [games, setGames] = useState([]);

  async function getGames() {
    try {
      const API = `http://localhost:8081/games`;
      const res = await axios.get(API);
      console.log(res.data);
      setGames(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>The Best Console Games Ever Made</h1>
      {games.map((game, key) => {
        return (
          <div key={game.title}>
            <p>{game.title}</p>
            <p>{game.year}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
