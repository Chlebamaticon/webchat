import express from 'express';
import path from 'path';

// import apiRoutes from './src/routes';
// import swaggerUI from './swagger';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swaggerUI(app);

app.use(express.static(
  path.join(__dirname, '../dist'),
));

app.use('/api', () => {
    console.debug('Api\'s hearing...');
});

export default app;