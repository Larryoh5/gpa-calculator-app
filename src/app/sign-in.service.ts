
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // iterate over studentIds and return true if there is a match, else return false
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
