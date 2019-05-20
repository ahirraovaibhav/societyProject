import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-flor',
  templateUrl: './flor.component.html',
  styleUrls: ['./flor.component.css']
})
export class FlorComponent implements OnInit {

  	displayedColumns: string[] = ['position', 'name'];
  	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  	@ViewChild(MatPaginator) paginator: MatPaginator;

  	ngOnInit() {
	    this.dataSource.paginator = this.paginator;
  	}  

}


export interface PeriodicElement {
  name: string;
  position: number;
  /** weight: number;
  symbol: string; */
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'building1'},
  {position: 2, name: 'building2'},
  {position: 3, name: 'building3'},
  {position: 4, name: 'building4'},
  {position: 5, name: 'building5'},
  {position: 6, name: 'building6'},
  {position: 7, name: 'building7'},
  {position: 8, name: 'building8'},
  {position: 9, name: 'building9'},
  {position: 10, name: 'building10'},
  {position: 11, name: 'building11'},
  {position: 12, name: 'building12'},
  {position: 13, name: 'building13'},
  {position: 14, name: 'building14'},
  {position: 15, name: 'building15'},
  {position: 16, name: 'building16'},
  {position: 17, name: 'building17'},
  {position: 18, name: 'building18'},
  {position: 19, name: 'building19'},
  {position: 20, name: 'building20'},
];