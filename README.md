MIRO-BOARD : https://miro.com/app/board/uXjVOwnjazE=/#tpicker-content

<h1>Requests</>
<h3>Get by Ids:</h3>

 - http://localhost:3002/persons/getById/{id}
 - http://localhost:3002/address/getById/{addressId}
 - http://localhost:3002/mobilePhone/getById/{id}
 - http://localhost:3002/passport/getById/{passportNumber}

 <h3>Get by givenNames/surname/birthPlace/birthYear</h3>

  - http://localhost:3002/persons/getByFull/Timothy%20Glenn/Owen/LONDON/1954

   birthPlace is stored in capitals in db, there is no type checking in api do this in front end please,
   birthYear is just a regex check, to see if number is contained within dateOfBirth. Can be birthDay as well like: ``` 1954-10-08 ```
      



  

  
