const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
   test('Should return an arr', () => {
        expect(shuffleArray()).toBe([])
    }) 

    test('Check if items have been shuffled', () => {
        expect(shuffleArray([1, 2, 3, 4, 5]).not.toBe('[1, 2, 3, 4, 5]'))
    })

   

})