import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';
import { AccountService } from '../service/account.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) { }

  getData(): void {
    this.accountService.getAccounts().then(accounts => this.accounts = accounts);
  }

  ngOnInit() {
    this.getData();
  }

}
