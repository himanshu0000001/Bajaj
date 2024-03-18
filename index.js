const express = require('expressconst app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Generate user_id using full_name_ddmmyyyy format
  const full_name_ddmmyyyy = 'john_doe_17091999';
  const user_id = `user_id: ${full_name_ddmmyyyy}`;

  // Extract email and roll_number from the request or use predefined values
  const email = 'john@xyz.com';
  const roll_number = 'ABCD123';

  // Separate even_numbers, odd_numbers, and alphabets from the data array
  const even_numbers = data.filter((num) => num % 2 === 0);
  const odd_numbers = data.filter((num) => num % 2 !== 0);
  
   let alphabets=[];
   for(let i=0;i<data.length;i++){
     if(typeof(data[i])==='string'){
       alphabets.push(data[i].toUpperCase());
     }
   }

   // Construct the response object according to the provided logic
   const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets
   };

   // Send back the response as JSON
   res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
