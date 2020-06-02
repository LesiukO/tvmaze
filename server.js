const express = require('express');
const app = express()


app.use(express.static('./dist/tvmaze'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/tvmaze/'}
);
});

app.listen(process.env.PORT || 8080);
