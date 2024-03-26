import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

currentUser: { name: string, email: string, mobilenumber: string } | null = null;
  constructor() { }
}
