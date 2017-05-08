import {Component, Input, OnInit} from '@angular/core';

import {NavController, Refresher} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';

import {DetailComponent} from '../detail/detail.component';

import {CartComponent} from '../cart/cart.component';
import {ServiceProviderService, CartService} from '../../providers';
import {ServiceProvider} from '../../models';

@Component({
  templateUrl: 'order.component.html',
})
export class OrderComponent implements OnInit {
  serviceproviders: ServiceProvider[] = [];
  loading: boolean;
  serviceproviderSource: Observable<ServiceProvider[]>;
  @Input() search: string = "";

  constructor(
    private serviceproviderService: ServiceProviderService,
    private cartService: CartService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.loading = true;
    const subscription = this.serviceproviderService.getServiceProviders().subscribe(serviceproviders => {
      this.serviceproviders = serviceproviders;
      this.loading = false;
      subscription.unsubscribe();
    }, () => this.loading = false);
  }

  doRefresh(refresher: Refresher) {
    const subscription = this.serviceproviderService.getServiceProviders().subscribe(serviceproviders => {
      this.serviceproviders = serviceproviders;
      refresher.complete()
      subscription.unsubscribe();
    }, () => refresher.complete());
  }

  openServiceProvider(id: number) {
    this.nav.push(DetailComponent, {
      id: id
    });
  }

  openCart() {
    this.nav.push(CartComponent);
  }

  addToCart($event, serviceprovider: ServiceProvider) {
    $event.stopPropagation();

    this.cartService.addCartItem(serviceprovider);
  }
}
