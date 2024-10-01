import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BacklogComponent } from "./pages/backlog/backlog.component";
import { BoardComponent } from "./pages/board/board.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SidebarComponent } from "./pages/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BacklogComponent, BoardComponent, LoginComponent, ProjectsComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-management-frontend';
}
