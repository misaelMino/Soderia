const database = require("../../config/database");


const getAllClientes = async () => {
    const connection = await database.getConnection();
    const [result] = await connection.query("SELECT * FROM angelitadb.cliente;");
    return result;
};


module.exports = {
    getAllClientes
};