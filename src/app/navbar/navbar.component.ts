import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input()
  showSideBar: boolean

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  ngOnInit() {
  }

  showSideBarAction() {
    this.showSideBar = !this.showSideBar
    this.showSideBarChange.emit(this.showSideBar)
  }

}
