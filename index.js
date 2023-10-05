const submitData = {
  userName: "Humphrey Hinga",
  emailAdress: "hhinga04@gmail.com"

} 
 const newElement = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },

  body: JSON.stringify(submitData),
};

fetch("http://localhost:3000/users",newElement) 
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })

  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  })
  

  


// Add your code here
