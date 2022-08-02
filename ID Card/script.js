function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var yourAddress = document.getElementById("yourAddress").value;
    var fullName = firstName + " " + lastName;
    
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = yourAddress + " ";
    
  
  
    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    
    for (var i = 0; i < numberArray.length; i++){
      
      if (numberArray[i] <= 100){
        document.getElementById("postAge").innerHTML = "Age:" + " " + age;
      }
      
      else if (numberArray[i] > 100){
        document.getElementById("postPhoneNumber").innerHTML = "Phone Number:" + " " + phoneNumber;
      }
  
    }
  }