import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  userData: any []= [];
  mastersrv = inject(MasterService);

  ngOnInit(): void {
      this.getUser();
  }

  getUser(){
    this.mastersrv.getuser().subscribe((res: any)=> {
      console.log(res)
      this.userData = res;
    })
  }
}
