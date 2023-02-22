import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const Index = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("inputValue", inputValue);
    router.push('/home')
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <TextField
            onChange={handleChange}
            name="email"
            value={inputValue.email}
            id="outlined-basic-1"
            label="Email"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={inputValue.password}
            type="password"
            id="outlined-basic-2"
            label="Password"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Index;
