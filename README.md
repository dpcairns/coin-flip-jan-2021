# Coin flip app

## HTML Setup
1) Two radio buttons (heads and tails)
    - images for coins
    - our radio buttons need the same "name"
    - out radio buttons need different "values"
2) Toss button
3) Empty divs for win, loss, total, and current throw result

## Javascript
1) Grab DOM elements (by id)
2) Initialize some state
    - wins: 0
    - total: 0
3) Add event listeners to the button
    - On click
        1) Store the computer's throw
            - We need to come up with a "computer throw", randomly between 'heads' or 'tails'
            - we could round a Math.random(). 1 is heads, 0 is tails.
        2) Store the user's throw
            - grab the checked input, and get its value
        3) We compare the user's guess to the computer throw
        4) We need to display the result of the the throw
