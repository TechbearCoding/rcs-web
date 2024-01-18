import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FunnyPictureComponent } from './funny-picture/funny-picture.component';

export const routes: Routes = [
    {path:'', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'funny', component: FunnyPictureComponent}
];
