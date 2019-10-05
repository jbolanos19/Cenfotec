import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoadModalComponent } from "../load-modal/load-modal.component";


@Component({
  selector: 'Final-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  @Output()
  public readonly success: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private readonly route: Router,private readonly modalService: NgbModal) { }

  ngOnInit() {
  }

  public logout(): void {
    var r = confirm("¿Desea salir del sistema?");
    if (r == true) {
      this.route.navigate(['/login'])
    } else {
      this.route.navigate(['/home'])
    }
  }

  public openLoadModal(isEdit: boolean = true) {
    this.modalService.open(LoadModalComponent);
  }
}
