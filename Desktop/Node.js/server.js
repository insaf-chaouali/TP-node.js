const express = require('express');

const app = express();
app.use(express.json()); // for parsing application/json

let todoss = [{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }, { id: 3, title: 'Todo 3' }]
app.post('/api/todoss/create', (req, res) => {
    const todo = req.body;
    todoss.push(todo);
    console.log(todo);
    res.send(todoss);
})

app.get('/api/todoss/all', (req, res) => {
    res.send(todoss);
});

app.put('/api/todoss/update/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todoss.map(todo => {
        return todo.id === id ? { ...todo, ...req.body } : todo
    })
    res.send(todo);
});
app.delete('/api/todoss/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    todoss = todoss.filter(todo => todo.id !== id);
    res.send(todoss);
    })
app.get('/api/todoss/:id', (req, res) => { 
    const id = Number(req.params.id);
    const todo = todoss.find(todo => todo.id === id);
    if (todo) {
        res.send(todo);
    } else {
        res.status(404).send('Todo not found');
    }
});

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')

})
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    res.send(`User id is ${id}`)
})  // params for id 

const todos = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' },
];
app.get('/todo', (req, res) => {
    res.send(todos);
})
app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const todo = todos.find(todo => todo.id == id)
    if (todo) {
        res.send(todo)
    }
    else {
        res.status(404).send('Todo not found')
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!'); //accept all types of responses
    res.json({ success: "hello to my server" }) // accept only json in response
    res.end('welcome to my server') // execute the request and skipped the other ones

});

app.listen(5000, () => {
    console.log('Server is running on port', 5000);
});