import { Component,ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spreadsheet';

  closeResult: string;

  constructor(private modalService: NgbModal){}

  openXl(content){
    this.modalService.open(content,{size:'xl'});
  }
}
