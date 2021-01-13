// IMPORT MODULES under test here:
import { makeHeadsOrTails } from '../utils.js';

const test = QUnit.test;

test('it should return heads when given a 1 as an argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'heads';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeHeadsOrTails(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return tails when given a 0 as an argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tails';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeHeadsOrTails(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});