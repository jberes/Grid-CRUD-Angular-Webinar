import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-grid-chart-view',
  templateUrl: './grid-chart-view.component.html',
  styleUrls: ['./grid-chart-view.component.scss']
})
export class GridChartViewComponent implements OnInit {
  public northwindCustomers: any = null;
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
