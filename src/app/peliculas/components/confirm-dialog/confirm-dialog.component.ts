import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: []
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef : MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pelicula, //Inyecta los datos del heroe
  ){}

  //Cierra el dialogo sin confirmar
  onNoClick(): void{
    this.dialogRef.close(false);
  }
  //Confirma la eliminacion y envia true como respuesta
  onConfirm(): void{
    this.dialogRef.close(true);
  }
}

