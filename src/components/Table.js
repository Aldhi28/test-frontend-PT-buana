/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function BasicExample(props) {
  const [getDatas, setGetDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  // const baseURL = "https://api.thecatapi.com/v1/breeds";
  useEffect(() => {
    daftarKucing();
  }, []);

  const daftarKucing = async () => {
    try {
      const data = await axios.get("https://api.thecatapi.com/v1/breeds");
      setGetDatas(data.data);
      //   setLoading(true);

      console.log(data.data, "<=== data");
      console.log(getDatas);
    } catch (error) {
      console.log(error, "<==== error daftar kucing");
    }
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nama kucing</th>
          <th> jenis kucing</th>
          <th>read more</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {getDatas.map((item, index) => {
              return <li key={item.id}>{item.id}</li>;
            })}
          </td>
          <td>
            {getDatas.map((item, index) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </td>
          <td>
            {getDatas.map((item, index) => {
              return (
                <li key={item.id}>
                  {item.cfa_url || item.vetstreet_url || item.temperament}
                </li>
              );
            })}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
