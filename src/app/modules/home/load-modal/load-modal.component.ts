import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'Final-load-modal',
  templateUrl: './load-modal.component.html',
  styleUrls: ['./load-modal.component.scss']
})
export class LoadModalComponent implements OnInit {
  @Input()
  public isEdit: boolean;
  @Output()
  public readonly success: EventEmitter<boolean> = new EventEmitter<boolean>();

  public form: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private readonly modalInstance: NgbActiveModal) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

}
