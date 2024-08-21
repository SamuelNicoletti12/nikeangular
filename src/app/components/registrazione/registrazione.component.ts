import { Component } from '@angular/core';
import { Form } from '../../models/form';
import { ServiziService } from '../../services/servizi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  form: Form = new Form();

  constructor(private ss: ServiziService, private router: Router) { }
}

