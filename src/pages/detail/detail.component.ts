import {Component, OnInit} from '@angular/core';

import {NavParams} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

import {ServiceProviderService} from '../../providers';
import {ServiceProvider} from '../../models';

@Component({
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
  serviceprovider: ServiceProvider;

  constructor(
    private navParams: NavParams,
    private serviceproviderService: ServiceProviderService
  ) {}

  ngOnInit(): void {
    this.serviceproviderService
      .getServiceProvider(this.navParams.get('id'))
      .toPromise()
      .then(serviceprovider => this.serviceprovider = serviceprovider);
  }
}
