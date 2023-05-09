import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsInfoComponent } from './films-info.component';

describe('FilmsInfoComponent', () => {
  let component: FilmsInfoComponent;
  let fixture: ComponentFixture<FilmsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsInfoComponent]
    });
    fixture = TestBed.createComponent(FilmsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
