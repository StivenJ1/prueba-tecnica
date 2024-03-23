import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsBuscarComponent } from './gifs-buscar.component';

describe('GifsBuscarComponent', () => {
  let component: GifsBuscarComponent;
  let fixture: ComponentFixture<GifsBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
