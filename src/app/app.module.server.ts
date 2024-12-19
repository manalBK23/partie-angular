import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { provideHttpClient, withFetch } from '@angular/common/http';  // Import withFetch
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    provideServerRoutesConfig(serverRoutes),
    provideHttpClient(withFetch())  // Enable fetch for SSR
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
