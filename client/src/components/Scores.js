import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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
  const columns = [
    { field: "username", headerName: "Gracz", width: 150 },
    { field: "points", headerName: "Punkty", width: 150 },
    { field: "percentage", headerName: "Procenty", width: 150 },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        fontSize: "16px",
        fontWeight: "bold",
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
              height: 400,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DataGrid
              rows={filteredPlayers}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              style={{ color: "black" }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Scores;
