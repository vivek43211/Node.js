import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('clicked', () => {
  console.log('An click evets occur , enter the number');
  setTimeout(()=>{
    console.log("An click occur , Do enter the number on urgent basis ")
  }, 3000)
});

myEmitter.on('waterfall', () => {
    console.log('turn off water supply ');
    setTimeout(()=>{
      console.log("turn off the water supply , on urgent basis ")
    }, 3000)
  });
myEmitter.emit('clicked');
console.log("the output is display ")
myEmitter.emit('waterfall')