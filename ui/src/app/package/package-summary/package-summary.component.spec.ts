import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSummaryComponent } from './package-summary.component';
import {PackageSummaryService} from './package-summary.service';
import {HttpModule} from '@angular/http';

describe('PackageSummaryComponent', () => {
  let component: PackageSummaryComponent;
  let fixture: ComponentFixture<PackageSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageSummaryComponent ],
      providers: [PackageSummaryService],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
