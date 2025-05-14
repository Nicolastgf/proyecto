import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "../css/HomePage.css"; // Asegurate que exista, pero no es esencial si usás customStyles

const Table = () => {
  const [users, setUsers] = useState([]);

  const URL = "https://gorest.co.in/public/v2/users";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "E-MAIL",
      selector: (row) => row.email,
    },
  ];

  // ✅ Estilos personalizados para achicar la tabla
  const customStyles = {
    table: {
      style: {
        width: "500px",
        margin: "0 auto",
        fontSize: "14px",
        margintop: "20px",
      },
    },
    rows: {
      style: {
        minHeight: "40px", // achica altura de fila
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        padding: "8px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        padding: "8px",
      },
    },
  };

  return (
    <div className="Table">
      <DataTable
        columns={columns}
        data={users}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
};

export default Table;
