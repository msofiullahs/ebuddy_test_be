
interface UserData {
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  numberOfRents: number,
  totalAverageWeightRatings: number,
  recentlyActive: Date,
  password: string,
}

// interface User extends UserData {}

export class User implements UserData {

  id: string;
  firstName: string;
  lastName: string;
  username: string;
  numberOfRents: number;
  totalAverageWeightRatings: number;
  recentlyActive: Date;
  password: string;

  constructor({
    id,
    firstName,
    lastName,
    username,
    numberOfRents,
    totalAverageWeightRatings,
    recentlyActive,
    password,
  }: UserData) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.numberOfRents = numberOfRents;
    this.totalAverageWeightRatings = totalAverageWeightRatings;
    this.recentlyActive = recentlyActive;
    this.password = password;
  }
  
}
