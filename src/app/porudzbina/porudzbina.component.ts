import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { PorudzbinaDialogComponent } from '../dialog/porudzbina-dialog/porudzbina-dialog.component';
import { Porudzbina } from '../model/porudzbina.model';
import { PorudzbinaService } from '../service/porudzbina.service';
import { Dobavljac } from './../model/dobavljac.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent implements OnInit {

  displayedColumns = ['id', 'datum', 'isporuceno', 'iznos', 'placeno', 'dobavljac', 'actions'];

  today: Date = new Date();

  dobavljac!: Dobavljac;

  selektovanaPorudzbina!: Porudzbina;

  dataSource!: Observable<Porudzbina[]>;

  constructor(public porudzbinaService: PorudzbinaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.porudzbinaService.getAllPorudzbina();
}

  public openDialog(flag: number, id: number, datum: Date, isporuceno: Date, iznos: number, placeno: boolean, dobavljac: Dobavljac) {
    const dialog = this.dialog.open(PorudzbinaDialogComponent, {data: {id: id, datum: datum, isporuceno: isporuceno, iznos: iznos, placeno: placeno, dobavljac: dobavljac}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  public selectedRow(row: Porudzbina): void {
    this.selektovanaPorudzbina = row;
  }

}
