import { RouterModule , Routes } from '@angular/router';
import { HomeComponent , AboutComponent , ItemComponent , SearchComponent } from './components/index.pages';


const app_routes : Routes = [
    { path: 'home' ,        component: HomeComponent },
    { path: 'about' ,       component: AboutComponent },
    { path: 'item/:cod' ,   component: ItemComponent },
    { path: 'search/:find', component: SearchComponent },
    { path: '**' ,      pathMatch: 'full' ,  redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes, {useHash:true});
