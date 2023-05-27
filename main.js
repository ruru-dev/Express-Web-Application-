//Homework Class #2
// build an express web application that does the following three things:

//this line of code allows you to pull in the code for the express dependecy (module).
const express = require('express');

//creates the object that knows how to start listening for connections, handling routes, accepting requests, sending responses etc.
const app = express();

//with incoming requests, it will parse the response body as JSON. If you don't include this method, it will give you an error that the body is undefined, because it can't understand it.
app.use(express.json());

// 1. adds 2 numbers 
// This should be a GET, with 2 query parameters: num1 and num2
// example: GET /add?num1=12num2=4

//Define an endpoint that will add two numbers which are passed in as query parameters.
app.get('/add', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;

  //Per express, you cannot send a number by itself. It must be ...

  //An object,
  // res.send({"sum": sum});

  //A string
  // res.send(''+sum);
  res.send(`${sum}`);

  //Or an array
  // res.send([sum]);
})


// 2. multiplies 2 numbers 
// This should be a POST, using a req body with keys: num1 and num2
// POST/multiply
// body: {num1:12, num2=3}

app.post('/multiply', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const product = num1 * num2;

  res.send(`${product}`);
});

// 3. returns the negative of a number
// This should be a GET, using the route parameters
// GET /negate/3
// response = -3

app.get('/negate/:num', (req, res) => {
  let num = parseInt(req.params.num);
  let negatedNum = num * -1;

  res.send(`${negatedNum}`);
})


app.listen(9001, function(){
  console.log('Application started ya fool!');
});
