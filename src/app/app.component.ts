import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(AgGridAngular) agGrid: AgGridAngular;

  constructor(private http: HttpClient) {}

  rowData: any[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 40000 },
    { make: 'Porsche', model: 'Boxster', price: 20000 }
  ];
  columns: any[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  defaultCols: ColDef = { sortable: true, filter: true };
  title = 'ag-grid';

  onCellClicked(event: CellClickedEvent): void {
    console.log(event);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  ngOnInit() {
    this.http.get('https://api.covid19api.com/summary').subscribe(
      (data) => {
        console.log('data = ', data);
      },
      (error) => {
        console.log('error = ', error);
      }
    );   
  }
}
