import express from 'express';
import moviesRouter from '../lib/data.ts';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(moviesRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});