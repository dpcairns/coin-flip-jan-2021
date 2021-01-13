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

        //Arrange
    // Set up your arguments and expectations
    const expected2 = 'tails';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = makeHeadsOrTails(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2, expected2);

});
