import React, { useState } from "react";

const MovimientoForm = ({ agregarMovimiento }) => {
  const [tipo, setTipo] = useState("Ingreso");
  const [empresa, setEmpresa] = useState("");
  const [formaPago, setFormaPago] = useState("Efectivo");
  const [fechaCobro, setFechaCobro] = useState("");
  const [remito, setRemito] = useState("");
  const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarMovimiento({
      tipo,
      empresa,
      formaPago,
      fechaCobro,
      remito,
      monto: parseFloat(monto),
      fechaRegistro: new Date().toISOString(),
    });

    // Limpiar campos
    setEmpresa("");
    setFormaPago("Efectivo");
    setFechaCobro("");
    setRemito("");
    setMonto("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-800 p-4 rounded-md text-white"
    >
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="w-full p-2 rounded"
      >
        <option value="Ingreso">Ingreso</option>
        <option value="Salida">Salida</option>
      </select>

      <input
        type="text"
        placeholder="Nombre de la empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        className="w-full p-2 rounded"
        required
      />

      <select
        value={formaPago}
        onChange={(e) => setFormaPago(e.target.value)}
        className="w-full p-2 rounded"
      >
        <option value="Efectivo">Efectivo</option>
        <option value="Cheque">Cheque</option>
      </select>

      <input
        type="date"
        value={fechaCobro}
        onChange={(e) => setFechaCobro(e.target.value)}
        className="w-full p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="Remito asociado"
        value={remito}
        onChange={(e) => setRemito(e.target.value)}
        className="w-full p-2 rounded"
      />

      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        className="w-full p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-500 w-full p-2 rounded text-black font-bold"
      >
        Agregar Movimiento
      </button>
    </form>
  );
};

export default MovimientoForm;
