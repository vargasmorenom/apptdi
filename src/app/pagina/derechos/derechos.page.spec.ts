import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DerechosPage } from './derechos.page';

describe('DerechosPage', () => {
  let component: DerechosPage;
  let fixture: ComponentFixture<DerechosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DerechosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
