import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dobavljac } from '../model/dobavljac.model';
import { DobavljacService } from '../service/dobavljac.service';
import { MatDialog } from '@angular/material/dialog';
import { ArtiklDialogComponent } from '../dialog/artikl-dialog/artikl-dialog.component';
import { DobavljacDialogComponent } from '../dialog/dobavljac-dialog/dobavljac-dialog.component';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent {

  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];

  dataSource!: Observable<Dobavljac[]>;

  constructor(public dobavljacService: DobavljacService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.dobavljacService.getAllDobavljac();
  }

  public openDialog(flag: number, id: number, naziv: string, adresa: string, kontakt: string) {
    const dialog = this.dialog.open(DobavljacDialogComponent, {data: {id: id, naziv: naziv, adresa: adresa, kontakt: kontakt}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

}
