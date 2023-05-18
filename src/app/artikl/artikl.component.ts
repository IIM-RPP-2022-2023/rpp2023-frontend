import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artikl } from '../model/artikl.model';
import { ArtiklService } from '../service/artikl.service';
import { MatDialog } from '@angular/material/dialog';
import { ArtiklDialogComponent } from '../dialog/artikl-dialog/artikl-dialog.component';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];

  dataSource!: Observable<Artikl[]>;

  constructor(public artiklService: ArtiklService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.artiklService.getAllArtikl();
  }

  public openDialog(flag: number, id: number, naziv: string, proizvodjac: string) {

    //konstanta dijalog koja će pozvati da se otvori Artikl dialog
    //definišemo vrednosti koje se prosleđuju dijalogu
    const dialog = this.dialog.open(ArtiklDialogComponent, {data: {id: id, naziv: naziv, proizvodjac: proizvodjac}});

    //dijalogu prosleđujemo flag obeležje
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

}
