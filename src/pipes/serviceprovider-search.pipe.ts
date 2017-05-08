import {Pipe, PipeTransform} from '@angular/core';

import {ServiceProvider} from '../models';

@Pipe({
  name: 'serviceproviderSearch'
})
export class ServiceProviderSearchPipe implements PipeTransform {
  transform(serviceproviders:ServiceProvider[], searchString: string) : any {
    let matches: ServiceProvider[] = [];

    if (!searchString) {
      return serviceproviders;
    }

    serviceproviders.forEach(function (serviceprovider) {
      if (serviceprovider.name.match(new RegExp(searchString, 'i'))) {
        matches.push(serviceprovider);
      }
    });

    return matches;
  }
}