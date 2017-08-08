import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PackageSearchComponent} from './package-search.component';
import {PackageSearchService} from './package-search.service';
import {HttpModule} from '@angular/http';

describe('PackageSearchComponent', () => {
  let component: PackageSearchComponent;
  let fixture: ComponentFixture<PackageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackageSearchComponent],
      providers: [PackageSearchService],
      imports: [HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
