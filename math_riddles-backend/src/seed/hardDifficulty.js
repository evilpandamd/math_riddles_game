const mongoose = require('mongoose');
const Joke = require('../models/joke');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

const jokes = [
    {
        id: 26,
        question: 'Why don’t scientists trust atoms?',
        encodedLetters: [
            {
                id: 1,
                letter: 'B',
                max: 7.2,
                min: 3.1,
                rightAnswer: false,
                sign: '+',
                total: 10.3,
            },
            {
                id: 2,
                letter: 'E',
                max: 18.5,
                min: 6.3,
                rightAnswer: false,
                sign: '-',
                total: 12.2,
            },
            {
                id: 3,
                letter: 'C',
                max: 4.8,
                min: 1.6,
                rightAnswer: false,
                sign: '*',
                total: 7.68,
            },
            {
                id: 4,
                letter: 'A',
                max: 18.9,
                min: 3.5,
                rightAnswer: false,
                sign: '/',
                total: 5.4,
            },
            {
                id: 5,
                letter: 'U',
                max: 10.1,
                min: 3.3,
                rightAnswer: false,
                sign: '+',
                total: 13.4,
            },
            {
                id: 6,
                letter: 'S',
                max: 13.7,
                min: 7.6,
                rightAnswer: false,
                sign: '-',
                total: 6.1,
            },
            {
                id: 7,
                letter: 'E',
                max: 6.6,
                min: 2.2,
                rightAnswer: false,
                sign: '*',
                total: 14.52,
            },
        ],
        difficulty: 'hard',
    },
    {
        id: 27,
        question: 'Why was the math book sad?',
        encodedLetters: [
            {
                id: 1,
                letter: 'B',
                max: 7.4,
                min: 2.2,
                rightAnswer: false,
                sign: '/',
                total: 3.36,
            },
            {
                id: 2,
                letter: 'E',
                max: 6.8,
                min: 2.3,
                rightAnswer: false,
                sign: '*',
                total: 15.64,
            },
            {
                id: 3,
                letter: 'C',
                max: 12.6,
                min: 3.3,
                rightAnswer: false,
                sign: '-',
                total: 9.3,
            },
            {
                id: 4,
                letter: 'A',
                max: 15.4,
                min: 7.2,
                rightAnswer: false,
                sign: '+',
                total: 22.6,
            },
            {
                id: 5,
                letter: 'U',
                max: 10.1,
                min: 2.2,
                rightAnswer: false,
                sign: '/',
                total: 4.59,
            },
            {
                id: 6,
                letter: 'S',
                max: 8.4,
                min: 2.1,
                rightAnswer: false,
                sign: '*',
                total: 17.64,
            },
        ],
        difficulty: 'hard',
    },

    {
        id: 28,
        question: 'Why do plants hate math?',
        encodedLetters: [
            {
                id: 1,
                letter: 'I',
                max: 12.4,
                min: 4.2,
                rightAnswer: false,
                sign: '-',
                total: 8.2,
            },
            {
                id: 2,
                letter: 'T',
                max: 16.8,
                min: 3.3,
                rightAnswer: false,
                sign: '/',
                total: 5.09,
            },
            {
                id: 3,
                letter: 'G',
                max: 6.7,
                min: 2.2,
                rightAnswer: false,
                sign: '*',
                total: 14.74,
            },
            {
                id: 4,
                letter: 'I',
                max: 8.9,
                min: 3.3,
                rightAnswer: false,
                sign: '+',
                total: 12.2,
            },
            {
                id: 5,
                letter: 'V',
                max: 12.1,
                min: 4.4,
                rightAnswer: false,
                sign: '-',
                total: 7.7,
            },
            {
                id: 6,
                letter: 'E',
                max: 9.9,
                min: 3.3,
                rightAnswer: false,
                sign: '/',
                total: 3.0,
            },
        ],
        difficulty: 'hard',
    },

    {
        id: 29,
        question: 'Why is the equal sign so humble?',
        encodedLetters: [
            {
                id: 1,
                letter: 'B',
                max: 14.4,
                min: 4.8,
                rightAnswer: false,
                sign: '/',
                total: 3.0,
            },
            {
                id: 2,
                letter: 'E',
                max: 8.2,
                min: 2.7,
                rightAnswer: false,
                sign: '*',
                total: 22.14,
            },
            {
                id: 3,
                letter: 'C',
                max: 13.3,
                min: 3.3,
                rightAnswer: false,
                sign: '-',
                total: 10.0,
            },
            {
                id: 4,
                letter: 'A',
                max: 9.9,
                min: 4.4,
                rightAnswer: false,
                sign: '+',
                total: 14.3,
            },
            {
                id: 5,
                letter: 'U',
                max: 12.1,
                min: 3.3,
                rightAnswer: false,
                sign: '/',
                total: 3.67,
            },
            {
                id: 6,
                letter: 'S',
                max: 8.8,
                min: 2.2,
                rightAnswer: false,
                sign: '*',
                total: 19.36,
            },
        ],
        difficulty: 'hard',
    },

    {
        id: 30,
        question: 'Why didn’t the number 4 get into the nightclub?',
        encodedLetters: [
            {
                id: 1,
                letter: 'B',
                max: 14.4,
                min: 4.8,
                rightAnswer: false,
                sign: '/',
                total: 3.0,
            },
            {
                id: 2,
                letter: 'E',
                max: 8.2,
                min: 2.7,
                rightAnswer: false,
                sign: '*',
                total: 22.14,
            },
            {
                id: 3,
                letter: 'C',
                max: 13.3,
                min: 3.3,
                rightAnswer: false,
                sign: '-',
                total: 10.0,
            },
            {
                id: 4,
                letter: 'A',
                max: 9.9,
                min: 4.4,
                rightAnswer: false,
                sign: '+',
                total: 14.3,
            },
            {
                id: 5,
                letter: 'U',
                max: 12.1,
                min: 3.3,
                rightAnswer: false,
                sign: '/',
                total: 3.67,
            },
            {
                id: 6,
                letter: 'S',
                max: 8.8,
                min: 2.2,
                rightAnswer: false,
                sign: '*',
                total: 19.36,
            },
        ],
        difficulty: 'hard',
    }
]

// Insert the data into the database
Joke.insertMany(jokes)
    .then(() => {
        console.log('Data inserted successfully');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error(err);
        mongoose.connection.close();
    });
