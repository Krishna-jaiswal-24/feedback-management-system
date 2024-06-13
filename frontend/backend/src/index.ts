import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT =8000;

app.use(express.json());
app.use(cors());
const feedbacks: { name: string, feedback: string }[] = [];

app.get('/feedback', (req: Request, res: Response) => {

    console.log(feedbacks);
    res.json(feedbacks);
});

//to handle post requests to /feedback
// using in memory storage to store feedbacks but when the server closes the feedbacks will be lost
// to store feedbacks permanently we need to use a database , it can be done using mongodb, mysql, postgresql etc


app.post('/feedback', (req: Request, res: Response) => {
    const { name, feedback } = req.body;
    feedbacks.push({ name, feedback });
    res.status(201).json({ message: 'Feedback submitted successfully' });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
