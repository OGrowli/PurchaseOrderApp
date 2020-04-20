import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as fromRoot from '../store/app.reducer';
import { Store, select } from '@ngrx/store';
import { getShowRightSideNav } from '../store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  showRightSideNav$: Observable<boolean>;
  

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<fromRoot.State>) {}
  
  ngOnInit(){
    this.showRightSideNav$ = this.store.pipe(select(fromRoot.getShowRightSideNav));
  }

  closeRightSideNav() {
    this.store.dispatch(new fromRoot.SetShowRightSideNav(false));
  }
}
