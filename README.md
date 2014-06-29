Slice
=====

Slice is an elegant collection of form components that can help you mock up web forms
in minutes. It was built solely for convenience and speed but heck you can use it for whatever you want.

####Includes:
- Input
- Textarea
- Buttons
- Radio
- Checkbox
- Legend
- Fieldset
- Labels
- Select Dropdown
If you can think of anymore form elements that you want, then open an [issue](https://github.com/dope/slice/issues/new) or [contribute](https://github.com/dope/slice/fork).

####Installation (lol, it's just css bro)
No crazy setup, just link the slice.css stylesheet and you're ready to go.

`<link rel="stylesheet" type="text/css" href="css/slice.css">`

####Getting Started
Getting started couldn't be easier — once you've added the stylesheet then all you need to do is start adding the relevant mark up. I'm going to show you a few exmaples.

#####The Mark up
Default text input `<input type="text" class="default-input" />`

Default textarea `<textarea class="default-input">Hey</textarea>`

Text input with a label
```
<label>
  <span class="label-icon"><i class="fa fa-user"></i></span>
  <input class="default-input label-input" type="text" placeholder="Default Text">
</label>
```

How about a dropdown menu?
```
<select class="default-input option-menu">
  <option value="option-1">Option 1</option>
  <option value="option-2">Option 2</option>
  <option value="option-3">Option 3</option>
  <option value="option-4">Option 4</option>
</select>
```

Simple Button `<input class="btn" type="submit">`

Slice also has some color options which you can call by just adding the following classes:
- Blue
- Green
- Red
- Orange
- Yellow
- Purple
- Dark

Checkbox `<input class="blue" type="checkbox" name="hi">`

Radio Button `<input class="blue" type="radio" name="hi">`

###Credits:
Icons by [Font Awesome](http://fontawesome.io)
