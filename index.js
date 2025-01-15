const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
	res.send('CICD TESTING 🦋');
	res.send('Lets see it it makes any changes');
});

app.listen(PORT, () => {
	console.log(`Server is listening at port ${PORT}`);
});
