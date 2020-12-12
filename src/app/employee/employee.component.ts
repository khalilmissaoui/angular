import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudServiceService} from '../shared/crud-service.service';
import {User} from '../model/user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() user : User ;
  @Output() selected = new EventEmitter();
  constructor(private service: CrudServiceService) { }

  ngOnInit(): void {
  }

  selectPersonne(){
   this.selected.emit(this.user);
  }



}
