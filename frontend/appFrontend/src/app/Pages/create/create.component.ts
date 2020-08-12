import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/Models/Location/location';
import { LocationServiceService } from 'src/app/Services/Location/location-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  locations: Location[] = [];
  parent: string = '';
  location: Location = new Location(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  submitted = false;
  errorMessage = '';
  validName = true;
  constructor(
    private locationService : LocationServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('1');
    this.getLocations();
  }

  getLocations() {
    this.locationService.findAll()
      .subscribe( res => {
        this.locations = res['result'];
      },
      error => {
        console.error(error)
      });
  }

  validateName(){
    if(this.locations.find(l=> l.name == this.location.name)){
      this.validName = false;
    }else{
      this.validName = true;
    }
    console.log(this.validName);
  }

  create(){
    if(this.location.name=="" || this.location.area==0 || this.validName == false){
      this.errorMessage="Aun faltan campos";
    }else{
      if(this.parent != ""){
        let auxLoc = this.locations.find(l => l.name == this.parent);
        console.log(auxLoc.id);
        this.location.parentId = auxLoc.id;
        this.location.parentname = auxLoc.name;
      }
      console.log(this.location);
      this.locationService.create(this.location)
      .subscribe(result => {
        this.router.navigate(["/"]);
        alert('Se creó satisfacoriamente la locación');
      },
      error => {
        console.log(error);
        alert('Ups, parece que hay algún error en los datos, por favor verificar');
      });
    }
  }

}
