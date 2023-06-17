import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainModule = () => import('./modules/features/main/main.module').then(x => x.MainModule);
const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  { path: 'main', loadChildren: () => import('./modules/features/main/main.module').then(x => x.MainModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
