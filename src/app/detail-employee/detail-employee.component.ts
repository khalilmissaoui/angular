import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../shared/data.service';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudServiceService} from '../shared/crud-service.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  user:User
  constructor(private data : DataService ,
  private ActivatedRoute : ActivatedRoute ,
              private router : Router,
              private crudService : CrudServiceService
  ) { }

  ngOnInit(): void {
      this.user=this.data.userdata;

  }



  ModifierUser(){
    this.router.navigate(["modifier",this.user.id])
  }

  deleteUser(){
    this.crudService.deleteEmploye(this.user.id).subscribe(x=>console.log(x),x=>console.log(x));
    this.router.navigate(['/redirect']);
  }

}
