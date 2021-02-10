export class User {
    id: string;
    token: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    active: boolean;
    roles: string[];
    userDetails: {
          id: string,
          phone: string,
          address: string,
          city: string,
          dist: string,
          state: string,
          pinCode: string
      };

}
