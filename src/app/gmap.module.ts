import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GmapService} from './gmap.service';
import {GoogleServiceConfig} from './gmap';

@NgModule({
    imports: [CommonModule],
    providers: [GmapService]
})
export class GmapModule {
  /**
     * Configure core method
     * @param config
     * @returns {{ngModule: GoogleMapsModule, providers: [{provide: GoogleServiceConfig, useValue: GoogleServiceConfig}]}}
     */
    static forRoot(config: GoogleServiceConfig): ModuleWithProviders {
        return {
            ngModule: GmapModule,
            providers: [
                {provide: GoogleServiceConfig, useValue: config}
            ]
        };
    }
 }
