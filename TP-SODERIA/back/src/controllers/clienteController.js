const Cliente = require('../models/clienteModel');
const ClienteRepository = require('../repositories/clientes/clienteRepository');

const getClientes = async (req, res) => {
    try {
        const clientesData = await ClienteRepository.getAllClientes(); // Datos JSON desde la base de datos

        // Convertimos los datos a instancias de la clase Cliente
        const clientes = clientesData.map(data => {
            return new Cliente(data.IdCliente, data.Nombre, data.Apellido, data.Direccion, data.IdTipoDoc,
                 data.DNI, data.Telefono, data.FechaDeAlta, data.IdBarrio);
        });

        // Ahora puedes hacer lo que quieras con la lista de clientes (por ejemplo, formatear fechas)


        res.json(clientes);  // Devolvemos los clientes como JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener clientes' });
    }
};

module.exports = {
    getClientes
};
