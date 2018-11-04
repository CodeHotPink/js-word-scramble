// ARRAYS Warm-ups

// Declare a variable greeting and assign to it a phrase.

const greeting = 'Sup, brah. How you doing?'
console.log(greeting)

// Split a string into an array of characters (see the .split() method)

console.log(greeting.split())

// Take an array of letters and merge them into a string (see the .join() method)

const charArray = greeting.split('')
console.log(charArray.join(''))

// Select a random item from an array (Read up on Math.random() to figure out how to choose a random item from your array. JavaScript doesn’t have Python’s random.choice() function at the ready, so we get to do it ourselves!)

numArray = [1, 3, 6, 9, 25, 38, 30]
function selectRandom(anyArray) {
	min = 0;
	max = (anyArray.length - 1);
	return anyArray[Math.floor(Math.random() * (max - min)) + min];
}
console.log(selectRandom(numArray))
// Select two random items from an array and swap them

function selectIndex(anyArray) {
	min = 0;
	max = (anyArray.length - 1);
	return Math.floor(Math.random() * (max - min)) + min;
}

const numberIndex = selectRandom(numArray);
function switchNumbers(anyArray) {
	const indexOne = selectIndex(anyArray);
	const indexTwo = selectIndex(anyArray);
	console.log(`[${indexOne}, ${indexTwo}]`)			
	console.log('BEFORE')
	console.log(anyArray)
	item = anyArray[indexOne] 
	item2 = anyArray[indexTwo]
	anyArray[indexOne] = item2
	anyArray[indexTwo] =item
	console.log('AFTER')
	console.log(anyArray)

}
switchNumbers(numArray)

// MAPS Warm-ups

// Create an empty map and assign it to the variable candy

const candy = {

}

// Set five colors as keys in the map and flavors as the values, for instance “purple” could be “grape”.

candy['purple'] = 'grape'
candy['yellow'] = 'banana'
candy['green'] = 'lime'
candy['blue'] = 'raspberry'
candy['red'] = 'strawberry'
console.log(candy)

// Iterate over the candy flavors to print “The x flavor is colored y.” for each

for (let key of Object.keys(candy)){
	console.log(`The ${candy[key]} flavor is colored ${key}`)
}

// Get the value of a color from the map, and see what happens when you try getting a value of a color that doesn’t exist.

console.log(candy['green'])
console.log(candy['pink'])

//FUNCTIONS Warm-up

// Write a function that takes a color and the candy map. It should return the flavor or if it’s not in the map, console log “Sorry, that color doesn’t have a flavor” and return nothing.

function flavorSearch(color, map){
	if (map[color] === undefined){
		console.log('Sorry, that color doesn\'t have a flavor');
		return null}
	else {
		return map[color]
	}
}

// Write a function that takes an array of colors and returns an array of the corresponding flavors. If the map doesn’t have the color, add null to the array.

const colorfulColors = ['pink','yellow','red','blue','green','purple']
function checkFlavor(color_array, map) {
	flavorArray = [

	]
	for (let color of color_array) {
		flavor = flavorSearch(color, map)
		flavorArray.push(flavor)
	}
	return flavorArray
}

console.log(checkFlavor(colorfulColors, candy))

// Create a function that reverses a word

function reverseString(anyString) {
	let reversed = "";
	for (let char of anyString) {
		reversed = char + reversed;
	}
	return reversed;
}
console.log(reverseString('backwoods'))

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
