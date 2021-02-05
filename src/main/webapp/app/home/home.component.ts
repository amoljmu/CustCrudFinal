/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';

import { LoginService } from 'app/core/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

import { CustomerService } from 'app/entities/customer/customer.service';
import { HttpResponse } from '@angular/common/http';
import { ICustomer } from 'app/shared/model/customer.model';
import { JhiEventManager } from 'ng-jhipster';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit {
  account: Account | null = null;

  public customers: ICustomer[] = [];
  eventSubscriber?: Subscription;
  public year: Array<number> = [];
  public cnt: Array<number> = [];

  public SystemName = 'Customer Count';
  public ChartType = 'bar' as const;
  firstCopy = false;

  public lineChartData: Array<number> = this.cnt;
  public lineChartLabels: Array<any> = this.year;
  public labelMFL: Array<any> = [{ data: this.lineChartData, label: this.SystemName }];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: 10,
            min: 0,
          },
        },
      ],
      xAxes: [{}],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: '#222',
        font: {
          family: 'FontAwesome',
          size: 14,
        },
      },
      deferred: false,
    },
  };

  _lineChartColors: Array<any> = [
    {
      backgroundColor: 'red',
      borderColor: 'red',
      pointBackgroundColor: 'red',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'red',
    },
  ];

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    protected customerService: CustomerService,
    protected eventManager: JhiEventManager
  ) {}

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

  loadAll(): void {
    this.customerService.query().subscribe((res: HttpResponse<ICustomer[]>) => {
      this.customers = res.body || [];
      if (res.ok) this.otherFunction();
    });
  }

  otherFunction(): void {
    const map: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < this.customers.length; i++) {
      const a = this.customers[i].dateOfBirth;
      const b = +moment(a).format('YYYY');
      let c: number = map.get(b) || 0;
      c = c + 1;
      map.set(b, c++);
    }
    const mapAsc = new Map([...map.entries()].sort());
    mapAsc.forEach((value: number, key: number) => {
      console.log('Amol-1--------------------map[' + key + ']:' + value);
      this.year.push(key);
      this.cnt.push(value);
    });
  }

  registerChangeInCustomers(): void {
    this.eventSubscriber = this.eventManager.subscribe('customerListModification', () => this.loadAll());
  }

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.account = account));
    this.loadAll();
    this.registerChangeInCustomers();
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginService.login();
  }
}
