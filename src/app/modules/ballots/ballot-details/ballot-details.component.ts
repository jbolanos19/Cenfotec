import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BallotsService } from "src/app/core/data-services/ballots.service";

@Component({
  selector: 'Final-ballot-details',
  templateUrl: './ballot-details.component.html',
  styleUrls: ['./ballot-details.component.scss']
})
export class BallotDetailsComponent implements OnInit {
  public ballot: any;

  constructor(private readonly ballotsService: BallotsService,
    private readonly route: Router,
    private readonly activatedRoute: ActivatedRoute) 
    {
      const id: number = this.activatedRoute.snapshot.params.id;
      this.getBallots(id);
    }

  ngOnInit() {
  }

  private getBallots(id: number): void {
    this.ballotsService.getBallots(id).subscribe(response => {
      console.log(response);

      this.ballot = response;
    });
  }
}
