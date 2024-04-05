import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVistasComponent } from './top-vistas.component';

describe('TopVistasComponent', () => {
  let component: TopVistasComponent;
  let fixture: ComponentFixture<TopVistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopVistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
