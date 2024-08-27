import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Voiture } from '../../class/voiture/voiture';

@Component({
  selector: 'app-creer-voiture',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './creer-voiture.component.html',
  styleUrl: './creer-voiture.component.css'
})
export class CreerVoitureComponent implements OnInit {

  voitureForm!: FormGroup;
  voitures!: Voiture[];

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.voitures = [];
    this.voitureForm = this.initForm();
    
  }

  initForm() {
    return this.formBuilder.group(
      {
        marque: new FormControl('', Validators.required),
        modele: new FormControl('', Validators.required),
        puissance: new FormControl(0, Validators.required),
      }
    )
  }

  onSubmit() {
    console.log("ohe");
    let modele = this.voitureForm.value.modele;
    let marque = this.voitureForm.value.marque;
    let puissance = this.voitureForm.value.puissance;
    let voiture = new Voiture(modele, marque, puissance);
    
    this.voitures.push(voiture);
    
    this.voitureForm.reset();

  }

}
