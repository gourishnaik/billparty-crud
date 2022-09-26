import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchdataComponent } from './watchdata.component';

describe('WatchdataComponent', () => {
  let component: WatchdataComponent;
  let fixture: ComponentFixture<WatchdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
