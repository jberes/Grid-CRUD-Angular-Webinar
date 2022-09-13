import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule } from 'igniteui-angular';
import { GridChartViewComponent } from './grid-chart-view.component';

describe('GridChartViewComponent', () => {
  let component: GridChartViewComponent;
  let fixture: ComponentFixture<GridChartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridChartViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridChartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
