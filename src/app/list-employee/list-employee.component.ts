import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CrudServiceService} from '../shared/crud-service.service';
import {User} from '../model/user';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit, OnChanges {
  @Output() selected = new EventEmitter();
  @Output() founded = new EventEmitter();
  listusers: User[] = [];
  filtredlist: User[] = [];
  x: boolean = true;
  found:string='red';

  @Input() filterAtt: String = '';

  constructor(private service: CrudServiceService, private data: DataService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log(this.filterAtt);
   this.filter();
    }

  ngOnInit(): void {
    this.service.getEmployee().subscribe((x) => {this.filtredlist = x;
                                                              this.listusers = x;});
    console.log('list od users' + this.listusers);
  }

  getperson(user){
    this.data.userdata=user;
    console.log(this.data.userdata);
    this.selected.emit(this.x);
  }

filter(){
  if(this.filterAtt !='') {
    this.filtredlist = this.listusers.filter(
      user =>{ if((user.username.toLocaleLowerCase()).includes(this.filterAtt.toLocaleLowerCase())){
        return true ;
      } else if((user.profession.toLocaleLowerCase()).includes(this.filterAtt.toLocaleLowerCase())) {
      return true
      }else if((user.email.toLocaleLowerCase()).includes(this.filterAtt.toLocaleLowerCase())) {
        return true
      }

      else return false

      } );
    if(this.filtredlist.length ==0){
      this.founded.emit("red")
    }else{
      this.founded.emit("green")
    }

  }else {
    this.filtredlist=this.listusers;
  }
}



}
