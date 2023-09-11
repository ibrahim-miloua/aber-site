const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b428e5b719msh1526b722234a6b0p11e3a4jsn56ce1d187d51',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

try {
    then(response=> ResizeObserver.json())
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}