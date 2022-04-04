const { error } = require('../src/constants')
const File = require('../src/file')
const { rejects, deepStrictEqual } = require('assert')

;
(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/foorItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "id": 1,
              "name": "Lucas Silva Souza",
              "profession": "Javascript Learner",
              "birthDay": 2002
            },
            {
              "id": 2,
              "name": "Giulaudo",
              "profession": "Javascript Specialist",
              "birthDay": 2016
            },
            {
              "id": 3,
              "name": "Calango",
              "profession": "Javascript Junior",
              "birthDay": 2003
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()