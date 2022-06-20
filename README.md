The MongoDB database has been deleted, so no longer functional 


MIRO-BOARD : https://miro.com/app/board/uXjVOwnjazE=/#tpicker-content

<h1>Requests</>
<h3>Get by Ids:</h3>

 - http://localhost:3002/persons/getById/{id}
 - http://localhost:3002/address/getById/{addressId}
 - http://localhost:3002/mobilePhone/getById/{id}
 - http://localhost:3002/passport/getById/{passportNumber}
 - http://localhost:3002/bankaccount/getById/{bankAccountid}
 - http://localhost:3002/friends/getById/{personId}
 - http://localhost:3002/partner/getById/{personId}


 <h3>Get by givenNames/surname/birthPlace/birthYear</h3>

  - http://localhost:3002/persons/getByFull/givenNames/Surname/PoB/DoB
  - These parameters are optional: birthYear is just a regex check, to see if number is contained within dateOfBirth. Can be birthDay as well like: ``` 1954-10-08 ```
  
   
   
   <h3>How to run tests</h3>
   
   - cd to ``` /redshift-finder/mern/server ```
   - run ``` npm test ```
      




  

  

