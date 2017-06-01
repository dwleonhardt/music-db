const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log('work');
});
app.use(express.static('public'));
