import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {
  friends:any[]=[
    {
      name:"waled ezz",
      img:"https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg"
      
    },
    {
      name:"mohamed ramy",
      img:"../../assets/1.jpg"
      
    },    {
      name:"eslam elsa2a",
      img:"../../assets/3.jpg"
      
    },
    {
      name:"eman ragy",
      img:"../../assets/4.jpg"
      
    },
    {
      name:"maha samy",
      img:"../../assets/5.jpg"
      
    },
    {
      name:"kaml ali",
      img:"../../assets/6.jpg"
      
    },
    {
      name:"yasmen sabry",
      img:"../../assets/7.jpg"
      
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
