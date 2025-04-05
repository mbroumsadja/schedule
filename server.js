import express from 'express';
import dotenv from 'dotenv';
import cookieparser  from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import route from './routes/route.js';
import android from './routes/android.js'

dotenv.config();

const port = process.env.PORT || 5000
const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

app.use(cookieparser(process.env.ACCESS_TOKEN_SECRET));

// Example of setting a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('exampleCookie', 'cookieValue', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });
    res.send('Cookie has been set');
});

// Example of reading a cookie
app.get('/get-cookie', (req, res) => {
    const cookieValue = req.cookies.exampleCookie;
    if (cookieValue) {
        res.send(`Cookie value: ${cookieValue}`);
    } else {
        res.send('No cookie found');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(route);
app.use(android)

app.listen(port,(req, res)=>{console.log(`le serveur tourne sur  le port ${port}`)});
