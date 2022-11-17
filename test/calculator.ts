import {Calculator} from '../src/calculator'
import {expect} from 'chai'

describe('calculator', () => {
    it('should initialise with a calculated value of 0', () => {
        const calculator = new Calculator()
        expect(calculator.value).to.equal(0)
    })

    it('should return a result of 5 when performing an addition of 5 immediately after creation', () => {
        const calculator = new Calculator()
        expect(calculator.add(5)).to.equal(5)
    })

    it('should store the result of an addition performed immediately after creation as the new calculated value', () => {
        const calculator = new Calculator()
        calculator.add(9)
        expect(calculator.value).to.equal(9)
    })

    it('should allow multiple additions to be performed, returning the result of the final additon', () => {
        const calculator = new Calculator()
        calculator.add(9)
        calculator.add(2)
        expect(calculator.add(1)).to.equal(12)
    })

    it('should store the result of multiple additions as the new calculated value', () => {
        const calculator = new Calculator()
        calculator.add(5)
        calculator.add(7)
        calculator.add(3)
        expect(calculator.value).to.equal(15)
    })

    it('give number and should return correct one, 9 should return IX', () => {
        const calculator = new Calculator()
        expect(calculator.convertToRoman(9)).to.equal('IX')
    })

    it('give number and should return correct one, 139 should return CXXXIX', () => {
        const calculator = new Calculator()
        expect(calculator.convertToRoman(139)).to.equal('CXXXIX')
    })
    it('give number and should return correct one, 1 should return I', () => {
        const calculator = new Calculator()
        expect(calculator.convertToRoman(1)).to.equal('I')
    })
})