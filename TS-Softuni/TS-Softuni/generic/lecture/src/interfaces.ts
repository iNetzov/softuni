// Contract/ interface
interface UserDetails {
  firstName: string;
  lastName: string;

  //   if ? it is optional
  email?: string;
  tellDetails?: () => void;
}

interface Human {
  legCount?: number;
  skinColor: string;
}
interface PersonDetails extends UserDetails, Human {}

class Person implements UserDetails, Human {
  firstName: string = "Milko";
  lastName: string = "Ivanov";
  skinColor: string;

  constructor(firstName: string, lastName: string, skinColor: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skinColor = skinColor;
  }
}

// const user: UserDetails = {
//   firstName: "pesho",
//   lastName: "Peshov",
//   email: "P.P@gmail.com",
//   tellDetails: function () {
//     console.log("hi from here");
//   },
// };

// user.tellDetails();
