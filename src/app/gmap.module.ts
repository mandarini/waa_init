import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GmapService} from './gmap.service';
import {UserServiceConfig} from './gmap';

@NgModule({
    imports: [CommonModule],
    providers: [GmapService]
})
export class GmapModule {
  /**
     * Configure core method
     * @param config
     * @returns {{ngModule: GoogleMapsModule, providers: [{provide: UserServiceConfig, useValue: UserServiceConfig}]}}
     */
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: GmapModule,
            providers: [
                {provide: UserServiceConfig, useValue: config}
            ]
        };
    }
 }
