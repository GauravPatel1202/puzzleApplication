import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PapersheetComponent } from '../components/papersheet/papersheet.component';
import { ResultsheetComponent } from '../components/resultsheet/resultsheet.component';
const routes: Routes = [
{ path: '', component: PapersheetComponent },
{ path: 'resultsheet', component: ResultsheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
