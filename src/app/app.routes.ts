import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {
        path: 'ldog',
        component: GalleryComponent,
    },
    {
        path: 'userl',
        component: UserComponent,
    }
];
