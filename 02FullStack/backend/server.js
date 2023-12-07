import express from 'express';

const app = express();

app.get('/' , (req,res) => {
    res.send('Server is Ready');
});


// get  a llst of Jokes in object   
const jokes =[
    {
        id : 1,
        title:" Joke 1",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 2,
        title:" Joke 2",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 3,
        title:" Joke 3",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 4,
        title:" Joke 4",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 5,
        title:" Joke 5",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 6,
        title:" Joke 6",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 7,
        title:" Joke 7",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 8,
        title:" Joke 8",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 9,
        title:" Joke 9",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 10,
        title:" Joke 10",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 11,
        title:" Joke 11",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 12,
        title:" Joke 12",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 13,
        title:" Joke 13",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        id : 14,
        title:" Joke 14",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    }
]
app.get('/api/jokes' , (req,res) => {
    res.send(jokes);
}
);


const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`Serve at http://localhost:${port}`);
})

