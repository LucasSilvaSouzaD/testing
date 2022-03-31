const Fibonacci = require('../src/fibonacci')
const sinon = require('sinon')
const assert = require('assert')

//Fibonacci o proximo valor é a soma dos dois valores anteriores
// 0,1,1,2,3,5

;
(async () => {

    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)

        for await(const i of fibonacci.execute(3)) {}


        const expectedCallCount = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCount)
    }
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        const [...results] = fibonacci.execute(5)

        const { args } = spy.getCall(2)
        const expectedResults = [0, 1, 1, 2, 3]
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2,
        })

        assert.deepStrictEqual(args, expectedParams)
        assert.deepStrictEqual(results, expectedResults)

    }


})()