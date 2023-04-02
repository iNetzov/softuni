function solve(...items){
    [firstName, lastName, hairColor] = items;

    let obj = {
        "name":"" ,
        "lastName":"",
        "hairColor":""}



    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

   

      let jsonObj  = JSON.stringify(obj);
      console.log(jsonObj);
}

solve('George','Jones','Brown');