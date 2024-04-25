import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopvotadasComponent } from './topvotadas.component';

describe('TopvotadasComponent', () => {
  let component: TopvotadasComponent;
  let fixture: ComponentFixture<TopvotadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopvotadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopvotadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
