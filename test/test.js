const calculator = require('../index');
const { expect } = require('chai');

describe('Test Calculator', () => {
    it('Suma', () => {
        const result = calculator.suma(2, 2)
        expect(result).to.equal(4)
    })
    it('Resta', () => {
        const result = calculator.resta(2, 2)
        expect(result).to.equal(0)
    })
    it('Multiplicación', () => {
        const result = calculator.multiplicacion(2, 2)
        expect(result).to.equal(4)
    })
    it('División', () => {
        const result = calculator.division(2, 2)
        expect(result).to.equal(1)
    })
})
