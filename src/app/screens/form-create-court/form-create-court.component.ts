import { Component } from '@angular/core';

@Component({
  selector: 'app-form-create-court',
  templateUrl: './form-create-court.component.html',
  styleUrl: './form-create-court.component.css'
})
export class FormCreateCourtComponent {
  displayForm() {
    document.getElementById('createCourtForm')?.classList.remove('hidden');

  }

}
