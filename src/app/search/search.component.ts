import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  myGroup = new FormGroup({
    nameControl:new FormControl('')}
  );
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/search', this.myGroup.controls.nameControl.value]);
    // @ts-ignore
    this.searchEvent.emit(this.myGroup.controls.nameControl.value);
  }
}
