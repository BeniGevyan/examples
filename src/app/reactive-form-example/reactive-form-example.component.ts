import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form-example",
  templateUrl: "./reactive-form-example.component.html",
  styleUrls: ["./reactive-form-example.component.css"],
})
export class ReactiveFormExampleComponent implements OnInit {
  // initiailize a form control with value "Yellow"
  secret = new FormControl("", {
    validators: [
      // this is the built-in required validation
      Validators.required, 
      // this is a regex validation that requires the input to start with "a" (case-insensitive)
      Validators.pattern(/^a/i),
      // a custom validation that requires at least 4 digits in the input
      (control) => {
        const requiredDigits = 4;
        const onlyDigits = control.value.replace(/[^0-9]/g, '');
        if (onlyDigits.length >= requiredDigits) {
          // there are no errors and the input is valid, return null
          return null;
        }
        // there are errors  
        // return an error object with the required digits
        // and the actual digits
        return {
          requiredDigits,
          actualDigits: onlyDigits.length,
        }
      } 
    ],
  });

  constructor() {}

  ngOnInit() {}

  fillInValidInput() {
    // programatically sets a valid value for the input
    // this is a reactive operation (the component will re-render automatically)
    this.secret.setValue("A123Bc4");
  }
}
