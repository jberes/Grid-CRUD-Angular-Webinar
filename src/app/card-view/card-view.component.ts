import { Component, OnInit } from '@angular/core';
import { RevealDashboardsListService } from '../services/reveal-dashboards-list.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  public revealDashboardsListDashboards: any = null;

  constructor(
    private revealDashboardsListService: RevealDashboardsListService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.revealDashboardsListService.getDashboards().subscribe(data => this.revealDashboardsListDashboards = data);
  }
}
