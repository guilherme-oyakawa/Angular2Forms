import {Component, Output, EventEmitter} from '@angular/core';
import {SelectModule} from 'ng2-select';

@Component({

	selector: 'select-multiple',
	templateUrl: './select-multiple.component.html',
})

export class SelectMultipleComponent{

  @Output() list = new EventEmitter();

  private value:any = [''];
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private items:Array<string> = ['Sandra', 'Hermano', 'Francisco', 'Monaco'];

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  private selected(value:any) {
    //console.log('Selected value is: ', value);
  }

  private removed(value:any) {
    //console.log('Removed value is: ', value);
  }

  private refreshValue(value:any) {
    this.value = value;
    //console.log("gestores", value);
    this.list.emit(this.value);
    /*
    console.log(value.map(item => {
    	return item.text;
    }).join(", "));
    */
  }

  private itemsToString(value:Array<any> = []) {
    return value
      .map(item => {
      return item.text;
    }).join(',');
  }
}