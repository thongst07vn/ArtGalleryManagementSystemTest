import { Routes } from '@angular/router';
import { AdminComponent } from './admin/layouts/layouts/admin.component';
import { DashBoardComponent } from './admin/components/dashboard/dashBoard.component';
import { CalendarComponent} from './admin/components/calendar/calendar.component';
import { UserListComponent } from './admin/components/user-list/user-list.component';

export const routes: Routes = [
    {
        path: '',
        component:AdminComponent,
        children: [
            {
                path: '',
                component: DashBoardComponent
            },
            {
                path: 'dashboard',
                component: DashBoardComponent
            },
            {
                path: 'calendar',
                component:CalendarComponent
            },
            {
                path:'user-list',
                component:UserListComponent
            }
        ]
    }
];
