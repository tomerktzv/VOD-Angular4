import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onSelect(component: string) {
    this.featureSelected.emit(component);
  }
}
