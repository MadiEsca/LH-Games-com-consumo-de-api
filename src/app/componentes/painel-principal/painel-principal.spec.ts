import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPrincipal } from './painel-principal';

describe('PainelPrincipal', () => {
  let component: PainelPrincipal;
  let fixture: ComponentFixture<PainelPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
