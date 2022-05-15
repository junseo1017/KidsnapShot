const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('static'));
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('8080번에서 실행');
});
