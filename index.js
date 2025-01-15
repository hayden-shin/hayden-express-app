const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
	res.send('CICD TESTING 🍀');
});

app.listen(PORT, () => {
	console.log(`Server is listening at port ${PORT}`);
});
