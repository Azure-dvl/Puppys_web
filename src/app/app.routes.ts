import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormAdoptarComponent } from './form-adoptar/form-adoptar.component';

export const routes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'form',
        component: FormAdoptarComponent
    }
];