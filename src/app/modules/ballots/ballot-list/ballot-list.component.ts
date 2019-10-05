import { Component, OnInit } from "@angular/core";
import { BallotsService } from "../../../core/data-services/ballots.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BallotModalComponent } from "../ballot-modal/ballot-modal.component";
import {BallotComponent} from "../ballot/ballot.component";

@Component({
  selector: 'Final-ballot-list',
  templateUrl: './ballot-list.component.html',
  styleUrls: ['./ballot-list.component.scss']
})
export class BallotListComponent implements OnInit {
  public ballots: any[];

  public pagination = {
    page: 1,
    pageSize: 10,
    totalElements: 13
  };

  constructor(
    private readonly ballotService: BallotsService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  public setRecordsPerPage(range?: any): void {
    this.pagination.pageSize = range;
    this.loadBallots();
  }

  public setPage(page: number): void {
    this.pagination.page = page;
    this.loadBallots();
  }

  private loadBallots(): void {
    this.ballotService.getBallots(this.pagination).subscribe(response => {
      console.log(response);
      
      this.ballots = response.body;
      this.pagination.totalElements = response.totalElements;
    });
  }

  public openBallotModal(isEdit: boolean = true) {
    const modalRef = this.modalService.open(BallotModalComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.success.subscribe(() => {
      this.loadBallots();
    });
    modalRef.componentInstance.customerToCreate.subscribe(data => {
      this.ballotService.addBallots(data).subscribe(() => {
        this.loadBallots();
        console.log("success", data);
        modalRef.dismiss();
      });
    });
  }

  public deteleBalllot(id: number): void {
    this.ballotService.deleteBallots(id).subscribe(
      () => {
        this.loadBallots();
      },
      error => {
        console.log(error);
      }
    );
  }

}
