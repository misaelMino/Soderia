const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const clienteRoutes = require("./routes/clientesRoutes.js");



//try/catch???
//config inicial
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log(`escuchando al puerto ${app.get("port")}`);



//middlewares
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"]
}))
app.use(morgan("dev"));


app.use("/clientes", clienteRoutes);  // Cargar las rutas de clientes bajo la ruta base "/clientes"
