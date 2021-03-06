import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SelectModule } from 'ng2-select';

import { AppComponent } from './app.component';
import { HeroFormComponent, NgbdModalContent} from './hero-form.component';
import { SelectMultipleComponent} from './select-multiple.component';
import { SelectDuplaComponent} from './select-dupla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    NgbdModalContent,
    SelectMultipleComponent,
    SelectDuplaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    NgbdModalContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
