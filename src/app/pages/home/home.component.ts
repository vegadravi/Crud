import { Component, OnInit } from '@angular/core';
//how to  import  xz.json file? 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // salary: any;
  list: any;
  dataArray = [];
  activeIndex: any;
  isShownNextButton: boolean= true;

  constructor() { }

  ngOnInit() {
    this.dataArray = JSON.parse(localStorage.getItem('dataArr'));
  }

  save() {
    this.isShownNextButton=true;
    if (this.list !== '') {
      this.dataArray = JSON.parse(localStorage.getItem('dataArr'));
      if(!this.dataArray){
        this.dataArray =[];
      }
      if(this.activeIndex > -1){
        this.dataArray[this.activeIndex].list = this.list;
        // this.dataArray[this.activeIndex].salary = this.salary;
        this.activeIndex = -1;

      }else{
        this.dataArray.push({list:this.list})
      }
      console.log("ravi",this.dataArray)
      localStorage.setItem('dataArr',JSON.stringify(this.dataArray))
      this.list = '';

    } else {
      alert("please insert data");
    }
  }

  edit(index) {
    this.isShownNextButton=false;
    console.log("index edit",index,this.activeIndex,this.dataArray)
    this.activeIndex = index;

    this.list = this.dataArray[index].list;
    // this.salary = this.dataArray[index].salary;
  }
  cancel(){
      this.list = '';
  }
  delete(index) {
    let text = "Are you sure This list is Delete? ";
    if(confirm(text) == true){
    this.dataArray.splice(index, 1);
    localStorage.setItem('dataArr', JSON.stringify(this.dataArray));
    }else{
      this.list = '';
    }
    
  }

}
