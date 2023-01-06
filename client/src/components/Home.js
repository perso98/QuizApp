import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [subject, setSubject] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSubject(event.target.value);
  };
  const handleSumbit = () => {
    navigate("/quiz");
  };
  return (
    <div
      style={{
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        padding: "3rem",
        background: "#e7e8db",
        width: "500px",
        height: "300px",
        borderRadius: "25px",
        marginTop: "10rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Zacznij quiz</h1>

      <TextField
        label="Nazwa użytkownika"
        variant="outlined"
        onChange={(e) => {
          props.setUsername(e.target.value);
        }}
        style={{ width: "100%", marginTop: "2rem", color: "white" }}
      />

      <FormControl
        sx={{ mt: 2, minWidth: "60%" }}
        style={{ alignContent: "center" }}
      >
        <InputLabel>Temat quizu</InputLabel>
        <Select
          value={subject}
          defauktValue="Wszystko"
          label="Temat quizu"
          onChange={handleChange}
        >
          <MenuItem value="Wszystko">Wszystko</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="success"
        style={{
          marginTop: "2rem",
          padding: "0.7rem",
          fontSize: "18px",
        }}
        onClick={handleSumbit}
      >
        Zapisz
      </Button>
    </div>
  );
}

export default Home;
