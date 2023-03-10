import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Root } from './model/data';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sideOpen = true
  title = 'open_movies';
  show = true;
  showsidenav = false;
  value: any;
  searchResult: Root[] | undefined
  showMore = false
  constructor(private router: Router, private service: ApiService ,
              private toast : NgToastService
    ) { }

  ngOnInit(): void {
    this.hidenav()
  }

  hidenav() {
    let token = localStorage.getItem('token')
    if (token) {
      this.showsidenav = true
    } else {
      this.showsidenav = false
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    this.hidenav()
    this.toast.success({detail:"Logged out",summary:"Logged Out successfully", duration:3000})
  }

  search(val: any) {
    this.service.searchMovies(val).subscribe(response => {
      this.searchResult = response.results
    })
  }

  hideSearch() {
    this.searchResult = undefined
  }

  redirectToDetails(id: number, value: any) {

    if (value.media_type == 'movie') {
      console.log("movie");
      this.router.navigate(['/details', id])
    } else if (value.media_type == 'tv') {
      console.log("tv");
      this.router.navigate(['/ShowDetails', id])
    }
  }
}