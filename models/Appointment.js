/*                              Aula 351 Definindo Model 14/07/23
                                Aula 352 Service de Consulta 17/07/23
                                Aula 363 Preparando base para tasks 04/08/23 */


/*(1-351) IMPORTAR O MONGOOSE*/

const mongoose = require("mongoose");

/* SCHEMA */
const appointment = new mongoose.Schema({
    name: String,
    email: String,
    description: String,
    cpf: String,
    date: Date,
    time: String,
/*(3-352) QUANDO UMA CONSULTA FOR FINALIZADA NÃO VOU EXIBIR NO CALENDÁRIO*/
    finished: Boolean,
/*(4-363) ESSE CAMPO VAI SERVIR PARA DIZER SE A NOTIFICAÇÃO DE QUE A CONSULTA ESTÁ PRÓXIMA DE ACONTECER JA FOI ENVIADA
PARA A CONSULTA ESPECÍFICA OU NÃO */
    notified: Boolean
});

/*(2-351) */
module.exports = appointment