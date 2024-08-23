import { Component } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';
import { Router } from '@angular/router';
import { Form } from '../../models/form';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {
  form: Form = new Form();
  constructor(private ss: ServiziService, private router: Router) { }
}
