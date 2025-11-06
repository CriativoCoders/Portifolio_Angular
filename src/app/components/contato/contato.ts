import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  contato = {
    nome: '',
    email: '',
    mensagem: ''
  };

  mensagemEnviada = false;

  enviarMensagem() {
    console.log('Mensagem enviada:', this.contato);
    this.mensagemEnviada = true;
    
    // Resetar formulário
    setTimeout(() => {
      this.contato = { nome: '', email: '', mensagem: '' };
      this.mensagemEnviada = false;
    }, 3000);
  }
}