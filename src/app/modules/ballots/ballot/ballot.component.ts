import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { BallotModalComponent } from "../ballot-modal/ballot-modal.component";

@Component({
  selector: 'Final-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.scss']
})
export class BallotComponent implements OnInit {
  @Input()
  public ballots: any;
  @Output()
  public readonly success: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output()
  public readonly deletedballot: EventEmitter<any> = new EventEmitter<any>()

  constructor(private readonly modalService: NgbModal, private readonly route:Router) { }

  ngOnInit() {}

  public openBallotModal(isEdit: boolean = true) {
    const modalRef = this.modalService.open(BallotModalComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.customer = this.ballots;
    modalRef.componentInstance.success.subscribe(
      () => {
        this.success.emit(true);
      }
    )
  }

  public goToDetails():void { 
    this.route.navigate(['ballots/details/', this.ballots.id])
  }

  public delete(): void {
    this.deletedballot.emit(this.ballots.id)
  }

}
