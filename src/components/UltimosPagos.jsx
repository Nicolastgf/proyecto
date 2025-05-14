import React, { useState } from "react";

const UltimosPagos = () => {
  const [nombre, setNombre] = useState("");

  return (
    <>
      <form action="">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese su nombre"
        />
      </form>
    </>
  );
};

export default UltimosPagos;
