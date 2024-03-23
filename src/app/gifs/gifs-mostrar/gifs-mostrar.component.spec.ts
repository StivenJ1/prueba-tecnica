import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsMostrarComponent } from './gifs-mostrar.component';

describe('GifsMostrarComponent', () => {
  let component: GifsMostrarComponent;
  let fixture: ComponentFixture<GifsMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsMostrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
