const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, function(){
  console.log('work');
});
app.use(express.static('public'));
