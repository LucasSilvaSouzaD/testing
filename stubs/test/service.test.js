const Service = require('../src/service')
const sinon = require('sinon')
const { deepStrictEqual } = require('assert')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"

const mocks = {
    tatooine: require('../mocks/tatooine.json'),
    alderaan: require('../mocks/alderaan.json'),
}


;
(async () => {
    // {
    //     const service = new Service()
    //     const withoutSub = await service.makeRequest(BASE_URL_2)
    //     console.log(JSON.stringify(withoutSub))
    // }

    const service = new Service()
    const sub = sinon.stub(service, service.makeRequest.name)

    // assim que a função for chamada pelo args passado o mesmo vai retornar o resolve que é um dado mockado.
    sub
        .withArgs(BASE_URL_1)
        .resolves(mocks.tatooine)
    sub
        .withArgs(BASE_URL_2)
        .resolves(mocks.alderaan)

    {
       const expected = {
            "name": "Tatooine",
            "surfaceWater": "1",
            appearedIn: 5
        }

        const results = await service.getPlanets(BASE_URL_1)
        deepStrictEqual(results, expected)
    }

    {
        const expected = {
            "name": "Alderaan",
            "surfaceWater": "40",
            appearedIn: 2
        }

        const results = await service.getPlanets(BASE_URL_2)
        deepStrictEqual(results, expected)

     }
   
})()