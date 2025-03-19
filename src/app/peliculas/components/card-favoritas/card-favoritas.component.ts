import { Component, Inject, Input, OnInit } from '@angular/core';
import { Detalles } from 'src/app/interfaces/detalles.interface';
import { PeliculasService } from '../../services/pelicula.service';
import { FavoritaService } from '../../services/favorita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CLOSE } from 'src/app/shared/messages';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-card-favoritas',
  templateUrl: './card-favoritas.component.html',
  styleUrls: ['./card-favoritas.component.css']
})
export class CardFavoritasComponent implements OnInit {

  @Input() public favorita! : number;

  public pelicula: Detalles | undefined;

  constructor(public dialogRef: MatDialog,
    private peliculaService: PeliculasService,
    private favoritaService: FavoritaService,
    private snackbar: MatSnackBar,
    private router: Router,
    ){}


  ngOnInit(): void {
    this.peliculaService.getPeliculasById(this.favorita).subscribe(
      pelicula =>{this.pelicula = pelicula;
      })
  }

  async eliminarFavorita(){
    const RESPONSE = await this.favoritaService.eliminarPelicula(this.pelicula!.id)
    if(RESPONSE){
      this.snackbar.open("Eliminada con exito de favorita", CLOSE, {duration: 5000});

      window.location.reload();
    }
  }

  eliminarFavoritas(){
    const dialogRef = this.dialogRef.open(ConfirmDialogComponent,{width: '350px',data:"¿Estas seguro de eliminar esta pelicula de favoritos?"});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.eliminarFavorita();
      }
    })

  }
   verDetalles() {
    this.router.navigate(['/peliculas/', this.pelicula?.id]);
  }



}

