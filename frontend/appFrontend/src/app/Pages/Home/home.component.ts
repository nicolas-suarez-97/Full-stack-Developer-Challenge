import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from 'src/app/Services/Location/location-service.service';
import { Location } from 'src/app/Models/Location/location';
import { Router, ActivatedRoute } from '@angular/router';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locations: Location[] = [];

  constructor(
    private locationService:LocationServiceService,
     private route: ActivatedRoute,
    private router: Router,
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

  deleteLocation(location: Location){
    this.locationService.delete(location)
      .subscribe( loc => {
        let x = this.locations.findIndex(l => l.id == location.id);
        this.locations.splice(x,1);        
        alert('Eliminado Correctamente');
      });
  }
}
