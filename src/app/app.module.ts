import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { ServiceProviderAppComponent } from './app.component';
import { OrderComponent } from '../pages/order/order.component';
import { CartComponent } from '../pages/cart/cart.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { AboutModalComponent } from '../components/about/about-modal.component';
import { CartIndicatorComponent } from '../components/cart-indicator/cart-indicator.component';

import { CartService, ServiceProviderService } from '../providers';
import { ServiceProviderSearchPipe } from '../pipes';

@NgModule({
  declarations: [
    ServiceProviderAppComponent,
    OrderComponent,
    CartComponent,
    DetailComponent,
    AboutModalComponent,
    CartIndicatorComponent,
    ServiceProviderSearchPipe
  ],
  imports: [
    IonicModule.forRoot(ServiceProviderAppComponent, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ServiceProviderAppComponent,
    OrderComponent,
    DetailComponent,
    CartComponent,
    AboutModalComponent
  ],
  providers: [CartService, ServiceProviderService]
})
export class AppModule {}
