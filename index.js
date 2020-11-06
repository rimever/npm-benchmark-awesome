const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const loop = 1000000;
// add tests
suite
    .add('out declare', function () {
        let i = 0;
        for (; i < loop; i++) {
        }
    })
    .add('inner declare', function () {
        for (let i = 0; i < loop; i++) {
        }
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});