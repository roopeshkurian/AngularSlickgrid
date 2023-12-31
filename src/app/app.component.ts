import { Component } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];
  title = 'AngularSlickgrid';
  constructor() {
    this.prepareGrid();
  }

  prepareGrid() {
    this.columnDefinitions = [
      { id: 'title', name: 'Title', field: 'title', sortable: true },
      { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true },
      { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
      { id: 'start', name: 'Start', field: 'start' },
      { id: 'finish', name: 'Finish', field: 'finish' },
    ];

    this.gridOptions = {
      enableAutoResize: true,
      enableSorting: true
    };

    // fill the dataset with your data (or read it from the DB)
    this.dataset = [
      { id: 0, title: 'Task 1', duration: 45, percentComplete: 5, start: '2001-01-01', finish: '2001-01-31' },
      { id: 1, title: 'Task 2', duration: 33, percentComplete: 34, start: '2001-01-11', finish: '2001-02-04' },
    ];
  }
}
