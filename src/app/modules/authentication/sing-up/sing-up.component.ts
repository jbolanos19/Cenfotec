import { Component, OnInit } from '@angular/core';
import { CONFIG } from "../../../config/config.module";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: 'Final-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  public form: FormGroup;
  public isSubmitted: boolean = false;
  public countries: string[] = ["USA", "CRC", "GER", "NIC", "AUS"];

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      phone: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(CONFIG.patterns.email),
          Validators.maxLength(30)
        ]
      ],
      country: ["", Validators.required]
    });

    // this.form.setValue()

    this.form.patchValue({
      country: 'CRC'
    })

  }

  public signUp() {
    this.isSubmitted = true;

    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);
  }

  public isControlValid(fieldName: string) {
    return this.validateFlied(this.form.get(fieldName), this.isSubmitted);
  }

  public validateFlied(
    formControl: AbstractControl | null,
    isFormSubmitted: boolean
  ): boolean {
    return (
      !!formControl &&
      !((formControl.touched || isFormSubmitted) && formControl.invalid)
    );
  }

}
