console.log('scripts')

const words = ['Happy', 'Tomatoe', 'Hippopotamus', 'Switzerland', 'Applesauce', 'Baseball'];

const chooseWord = (words) => {
	const rand = words[Math.floor(Math.random() * words.length)];
	return rand;
}

chooseWord(words);


