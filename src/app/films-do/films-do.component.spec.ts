import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDoComponent } from './films-do.component';

describe('FilmsDoComponent', () => {
  let component: FilmsDoComponent;
  let fixture: ComponentFixture<FilmsDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsDoComponent]
    });
    fixture = TestBed.createComponent(FilmsDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
