import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BallotsService } from "../../../core/data-services/ballots.service";

@Component({
  selector: 'Final-ballot-modal',
  templateUrl: './ballot-modal.component.html',
  styleUrls: ['./ballot-modal.component.scss']
})
export class BallotModalComponent implements OnInit {
  @Input()
  public isEdit: boolean;
  @Input()
  public ballot: any;

  @Output()
  public readonly success: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly ballotToCreate: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly modalInstance: NgbActiveModal,
    private readonly ballotService: BallotsService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      id: ["", Validators.required]
    });

    if (this.isEdit) {
      this.form.patchValue(this.ballot);
    }
  }

  public dismiss(): void {
    this.modalInstance.dismiss();
  }

  public onSubmit(): void {
    if (this.isEdit) {
      this.ballotService
        .updateBallots(this.ballot.id, this.form.value)
        .subscribe(
          () => {
            this.success.emit(true);
            this.dismiss();
          },
          error => {
            console.log(error);
          }
        );
    } else {
      const payload: any = this.addImgToPayload();
      this.ballotToCreate.emit(payload);
    }
  }

  private addImgToPayload(): any {
    return {
      img: 'https://www.w3schools.com/howto/img_avatar.png',
      ...this.form.value
    }
  }

}
