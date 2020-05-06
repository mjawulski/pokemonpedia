import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchFormComponent } from './pokemon-search-form.component';

describe('PokemonSearchFormComponent', () => {
  let component: PokemonSearchFormComponent;
  let fixture: ComponentFixture<PokemonSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
