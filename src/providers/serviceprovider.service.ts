import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {ServiceProvider} from '../models';

@Injectable()
export class ServiceProviderService {

  constructor(private http: Http) {}

  getServiceProviders(): Observable<ServiceProvider[]> {
    return this.http
      .get('assets/serviceprovider.json')
      .delay(2000)
      .map((res: Response) => res.json());
  }

  getServiceProvider(id): Observable<ServiceProvider> {
    return this.http
      .get('assets/serviceprovider.json')
      .map((res: Response) => res.json())
      .map((serviceproviders: ServiceProvider[]) => {
        for (let serviceprovider of serviceproviders) {
          if (serviceprovider.id === id) {
            return serviceprovider;
          }
        }
      });
  }
}