import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';
import { EggComponent } from './egg/egg.component';
import { HomeComponent } from './home/home.component';
import { SnekComponent } from './snek/snek.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aboutme", component: AboutmeComponent },
  { path: "snek", component: SnekComponent },
  { path: "egg", component: EggComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
