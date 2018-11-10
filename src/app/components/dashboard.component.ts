import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: '../views/dashboard/dashboard.component.html',
  styleUrls: ['../views/dashboard/dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  }
