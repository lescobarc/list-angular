import { ItemService } from './../../services/item.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'; 
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  title: string ='';
  price:number = 0;
  quantity: number =  0;

  constructor(private itemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    //this.itemService.addItem(item)
    this.itemService.addItem(item).subscribe(i =>{
      this.router.navigate(['/'])
    } );
    
  }
}
