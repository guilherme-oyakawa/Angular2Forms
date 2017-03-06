import {Component, Output, EventEmitter} from '@angular/core';
import {SelectModule} from 'ng2-select';

@Component({
	selector:'select-dupla',
	templateUrl:'./select-dupla.component.html',
})

//private items:Array<string> = ['José Maria', 'Mariana Fernandez', 'Fernando da Silva', 'Mariana da Silva'];

export class SelectDuplaComponent{

	 @Output() dupla = new EventEmitter();

	private items:Array<string> = ['José Maria', 'Mariana Fernandez', 'Fernando da Silva', 'Mariana da Silva'];
	private value:any = {};
	private _disabledV:string = '0';
  	private disabled:boolean = false;
 
 	private get disabledV():string {
    	return this._disabledV;
  	}
 
  	private set disabledV(value:string) {
  		this._disabledV = value;
    	this.disabled = this._disabledV === '1';
  	}
 
  	public selected(value:any):void {
    	//console.log('Selected value is: ', value);
  	}
 
  	public removed(value:any):void {
    	//console.log('Removed value is: ', value);
  	}
 
  	public typed(value:any):void {
    	//console.log('New search input: ', value);
  	}
 
  	public refreshValue(value:any):void {
    	this.value = value;
    	this.dupla.emit(value);
  	}
}