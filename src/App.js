import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Card from "./components/Card";
import Button from "react-bootstrap/esm/Button";

function App(props) {
  return (
    <div>
      <h1>Search API </h1>
      <Card button={Button} />
      <Table />
    </div>
  );
}

export default App;
