import { Injectable, ModuleWithProviders, Optional } from '@angular/core';
import { UserServiceConfig } from './gmap';

@Injectable()
export class GmapService {


      /**
       * Google Maps Api link
       */
      readonly url: string;

      /**
       * Promise to callback
       */
      private loadAPI: Promise<any>;

      /**
       * Configure core method
       * @param config
       * @returns {{ngModule: GmapService, providers: [{provide: UserServiceConfig, useValue: UserServiceConfig}]}}
       */
      static forRoot(config: UserServiceConfig): ModuleWithProviders {
          return {
              ngModule: GmapService,
              providers: [
                  {provide: UserServiceConfig, useValue: config}
              ]
          };
      }

      /**
       * Constructor
       * @param config
       */
      constructor(@Optional() config: UserServiceConfig) {
          if (config) {
              this.url = config.url + '&callback=__onGoogleLoaded';
          } else {
              throw new Error('Module have been forRoot({API_KEY: your api key})');
          }
      }

      /**
       * Load script
       */
      private loadScript(): void {
          if (!document.getElementById('gmap')) {
              const script = document.createElement('script');

              script.type = 'text/javascript';
              script.src = `${this.url}`;
              script.id = 'gmap';

              document.head.appendChild(script);
          }
      }

      /**
       * Wait callback and return google.maps object
       * @returns {Promise<any>}
       */
      get init(): Promise<any> {
          if (!this.loadAPI) {
              this.loadAPI = new Promise((resolve) => {
                  window['__onGoogleLoaded'] = (ev: any) => {
                      resolve(window['google']['maps']);
                  };

                  this.loadScript();
              });
          }

          return this.loadAPI;
      }
}
