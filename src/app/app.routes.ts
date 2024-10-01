import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BoardComponent } from './pages/board/board.component';
import { BacklogComponent } from './pages/backlog/backlog.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: "full"
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: SidebarComponent,
        children: [
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'backlog',
                component: BacklogComponent
            },
            {
                path: 'board',
                component: BoardComponent
            }
        ]
    }
];
