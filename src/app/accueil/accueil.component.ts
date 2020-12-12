import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../shared/crud-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  activated =false;
  filterAtt :string ='';
  Color:string ='green';
  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  add(): void{
    this.router.navigate(['/add']);
  }

  toggle(x){
    this.activated=!this.activated;
    console.log("this is from the top"+x);

  }

  RechercheColor(color){
    console.log(color);
    this.Color=color;
  }
}
