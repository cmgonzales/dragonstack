const express = require('express');
const GenerationEngine = require('./generation/engine')
const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation')

const app = express();

const engine = new GenerationEngine()

//binding local 

app.locals.engine = engine;

app.use('/dragon',dragonRouter)
app.use('/generation', generationRouter);

engine.start();




module.exports = app;



// const Generation = require ('./generation')

// const generation = new Generation ()


// console.log('generation', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);

// setTimeout(() => { 
// const mimar = generation.newDragon()
// console.log('mimar', mimar);
// }, 15000)

// const Dragon = require('./dragon')


// const fooey = new Dragon({
//     birthdate: new Date(), 
//     nickname: 'fooey',
//     traits: [{traitType: 'backgroundColor', traitValue: "green" }]
// })
// const mimar = new Dragon();
// const gooby = new Dragon();


// console.log(fooey);
// console.log(mimar);
// console.log(gooby);
