import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestService} from './request.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Upper } from './upper.pipe';
import { HoverDirective } from './hover.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  
    FormComponent,
    UserComponent,
    Upper,
    HoverDirective
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
