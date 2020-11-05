const express = require('express');
const connectDB = require('./config/db');
const router = express.Router();
const app = express();

connectDB();

//init.middleware
app.use(express.json({ extended: false}));

app.get('/', (req,res) => res.send('API Running')); 

//Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/post',require('./routes/api/post'));
app.use('/api/auth',require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('Express app listening on port ' + PORT);
});
