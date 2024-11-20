import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctoListComponent } from './proucto-list.component';

describe('ProuctoListComponent', () => {
  let component: ProuctoListComponent;
  let fixture: ComponentFixture<ProuctoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProuctoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuctoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
