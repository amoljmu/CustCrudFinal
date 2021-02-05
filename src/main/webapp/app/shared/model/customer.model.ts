import { Moment } from 'moment';

export interface ICustomer {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  dateOfBirth?: Moment;
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public firstName?: string,
    public middleName?: string,
    public lastName?: string,
    public email?: string,
    public phoneNumber?: string,
    public dateOfBirth?: Moment
  ) {}
}
