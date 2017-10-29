import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GeneralAreaComponent } from './general-area/general-area.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComentsComponent } from 'app/coments/coments.component';
import { PostComponent } from 'app/post/post.component';
import { GainComponent } from './gain/gain.component'
import { SpendComponent } from 'app/spend/spend.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralAreaComponent,
    ConclusionComponent,
    NavComponent,
    ComentsComponent,
    PostComponent,
    GainComponent,
    SpendComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'accounting',
        component: GeneralAreaComponent
      },
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: 'post/:id',
        component: ComentsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
