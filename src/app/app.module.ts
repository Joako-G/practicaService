import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HoroscopoService } from './services/horoscopo.service';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { TraductorService } from './services/traductor.service';
import { VideoComponent } from './components/video/video/video.component';
import { VideoService } from './services/video.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HoroscopoComponent,
    TraductorComponent,
    VideoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HoroscopoService, TraductorService, VideoService],
})
export class AppModule {}
