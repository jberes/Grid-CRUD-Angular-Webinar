import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridEditDoneEventArgs, IgxGridComponent, IgxSnackbarComponent, IRowDataEventArgs } from 'igniteui-angular';
import { Feature } from '../models/features.model';
import { FeaturesService } from '../services/features.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public featuresFeatures!: Feature[];

  @ViewChild(IgxGridComponent) public grid!: IgxGridComponent
  @ViewChild(IgxSnackbarComponent) public snackbar!: IgxSnackbarComponent


  async rowDeleted($event: IRowDataEventArgs) {
    await this.featuresService.deleteFeature($event.data);
    this.snackbar.open("Row Deleted");
  }

  async rowAdded(event: IRowDataEventArgs) {
    var newFeature = await this.featuresService.addFeature(event.data);
    //this.grid.updateRow(newFeature, event.data.featureId);
  }

  async rowEditDone(event: IGridEditDoneEventArgs) {
    if (!event.isAddRow) {
      await this.featuresService.updateFeature(event.newValue);
      this.snackbar.open('Row Updated');
    }
  }

  constructor(
    private featuresService: FeaturesService,
  ) { }

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.featuresService.getFeatures().subscribe(data => this.featuresFeatures = data);
  }
}
