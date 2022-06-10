# CV Application
###### My first React project

![(gif of project to be inserted here)](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/cv-application.gif)

## Links
- [Try CV application here!](https://tylphe.github.io/cv-application/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-cv-application)

## Features
- Create a simple CV by using the form on the left
- Click each section to edit the text
- Create a PDF to send to your next job today!

## About
CV Application tries to make CV building as simple as possible. Populate the form on the left and watch it create the CV before your eyes.

Click on each text field within the CV to edit the text.

This assignment starts with class-based components and later converted to funciton-based components

## Challenges
### Creating editing windows
I wanted an intuitive user experience where clicking on sections of the resume would generate input fields.

I decided to use states to determine if the editing window should appear or not. For example, state structure looks like this:
```
this.state = {
  skill0: {
    skill: 'Programming Languages',
    skillEdit: false,
  }
}
```

Then, I used an if-statement to read the `skillEdit` key to generate the input field.

### Destructuring this.state - Is this also legal?
I wonder if the following is also legal. It seems to work just fine:
`this.setState({...this.state, exp0: {title: !this.state.exp0.title}})`

I wonder if this is better or worse than the updater function in the code block above. The [official React doc](https://reactjs.org/docs/react-component.html#setstate), recommends the updater function.

After further investigation, I found [this explanation](https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook).

For the purpose of this project, using the destructured object in setState would still work. However, if I were to use the destructured object twice in a row, then I would run into problems.
