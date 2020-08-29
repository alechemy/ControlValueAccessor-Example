import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}
  _model = ""
  
  get model () {
    return this._model;
  }

  set model(val){
    console.log(val);

    if (val !== undefined && this._model !== val){
      this._model = val;
      this.onChange(val)
      this.onTouch(val)
    }
  }

  writeValue(value: any){
    this._model = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }
}