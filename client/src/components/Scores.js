import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

function Scores() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/players");
      setPlayers(
        result.data[0].sort(
          (player1, player2) => player2.points - player1.points
        )
      );
      setLoading(false);
    };
    fetchData();
  }, []);
  const filteredPlayers = players.filter((player) =>
    player.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        fontSize: "16px",
        fontWeight: "bold",
        height: "300px",
      }}
    >
      {loading ? (
        <h3>Ładowanie...</h3>
      ) : (
        <>
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: "2rem" }}
            label="Nazwa użytkownika"
            variant="outlined"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "bold",
              height: "300px",
            }}
          >
            {filteredPlayers?.length ? (
              filteredPlayers.map((player, index) => {
                return (
                  <div
                    style={{
                      margin: "1rem",
                    }}
                  >
                    {index + 1}: {player.username} Punkty: {player.points}{" "}
                    Procenty: {player.percentage}%
                  </div>
                );
              })
            ) : (
              <h3 style={{ textAlign: "center" }}>
                Nie znaleziono takiego gracza
              </h3>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Scores;
