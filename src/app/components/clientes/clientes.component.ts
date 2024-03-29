//clientes.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from './cliente'; // Importando la clase cliente
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes: cliente[] = [];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente: cliente): void {
    Swal.fire({
      title: '¿Estás Seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning', // Cambiado de 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar',
      customClass: {
        confirmButton: 'btn btn-success', // Usa 'customClass' para clases de botones
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) { // Cambiado de 'result.value' a 'result.isConfirmed'
        this.clienteService.delete(cliente.id!).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            Swal.fire( // Asegúrate de que esta segunda llamada también use Swal.fire
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito.`,
              'success'
            );
          }
        );
      }
    });
  }
}
