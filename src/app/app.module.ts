import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouletteComponent } from './roulette/roulette.component';
import { SiriComponent } from './siri/siri.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { StoryComponent } from './story/story.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    SiriComponent,
    HighlightDirective,
    DirectiveExampleComponent,
    StoryComponent,
    ReactiveFormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
