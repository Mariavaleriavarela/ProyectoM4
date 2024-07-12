const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let reservas = [];

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Reservas Hoteleras',
            version: '1.0.0',
            description: 'Documentación de la API de Reservas Hoteleras'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor Local'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.send('API de Reservas Hoteleras');
});

app.post('/api/reservas', (req, res) => {
    const reserva = req.body;
    reserva.id = reservas.length + 1;
    reservas.push(reserva);
    res.status(201).send('Reserva creada');
});

app.get('/api/reservas', (req, res) => {
    res.json(reservas);
});

app.get('/api/reservas/:id', (req, res) => {
    const reserva = reservas.find(r => r.id === parseInt(req.params.id));
    if (!reserva) return res.status(404).send('Reserva no encontrada');
    res.json(reserva);
});

app.put('/api/reservas/:id', (req, res) => {
    const reserva = reservas.find(r => r.id === parseInt(req.params.id));
    if (!reserva) return res.status(404).send('Reserva no encontrada');

    Object.assign(reserva, req.body);
    res.send('Reserva actualizada');
});

app.delete('/api/reservas/:id', (req, res) => {
    const reservaIndex = reservas.findIndex(r => r.id === parseInt(req.params.id));
    if (reservaIndex === -1) return res.status(404).send('Reserva no encontrada');

    reservas.splice(reservaIndex, 1);
    res.send('Reserva eliminada');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});



