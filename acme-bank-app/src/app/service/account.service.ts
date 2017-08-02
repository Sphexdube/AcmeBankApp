import { Injectable } from '@angular/core';
import { Account } from '../model/account';
import { ACCOUNTS } from '../data/mock-accounts';



@Injectable()
export class AccountService {
    getAccounts(): Promise<Account[]> {
        return Promise.resolve(ACCOUNTS);
    }

}