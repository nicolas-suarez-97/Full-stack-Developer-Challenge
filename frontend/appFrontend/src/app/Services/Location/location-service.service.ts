import { Injectable } from '@angular/core';
import { Location } from '../../Models/Location/location';
import { environment } from 'src/environments/environment';
import { RequestService } from '../../Request/request.service';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private request: RequestService) { }

  
  findById(id: string) {
    const url = `${environment.baseUrl}/api/location/${id}`;
    return this.request.get<Location>(url);
  }

  findAll() {
    // return this.entregas;
    const url = `${environment.baseUrl}/api/location`;
    return this.request.get<Location[]>(url);
  }

  update(location: Location) {
    const url = `${environment.baseUrl}/api/location/${location.id}`;
    return this.request.put(url, {
      name: location.name,
      area:location.area,
      parentId: location.parentId,
      parentName: location.parentname
    });
  }

  create(location: Location) {
    const url = `${environment.baseUrl}/api/location`;
    return this.request.post(url, {
      name: location.name,
      area:location.area,
      parentId: location.parentId,
      parentName: location.parentname
    });
  }

  delete(location: Location) {
    const url = `${environment.baseUrl}/api/location/${location.id}`;
    return this.request.delete(url, {
    
    });
  }

}
