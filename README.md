# CV Application
###### My first React project

![(gif of project to be inserted here)](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/cv-application.gif)

## Links
- [Try CV application here!](https://tylphe.github.io/cv-application/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/node-path-javascript-cv-application)

## Features
- Create a simple CV by using the form on the left
- Click each section to edit the text (work in progress)
- Create a PDF to send to your next job today! (work in progress)

## About
CV Application tries to make CV building as simple as possible. Populate the form on the left and watch it create the CV before your eyes.

Click on each text field within the CV to edit the text.

## Challenges
### React?!
This is it. I've been developing my JavaScript skills to build a solid foundation for React but holy cow this is hard to grasp for now.

Every day is a challenge so far... more to come after I google a few more things...

### States

### Passing data between parent components and children

### Creating editing windows (and basically everything else)

### Destructuring deeply nested objects
My state is an object containing multiple nested objects. I had trouble learning how to update the state of a deeply nested object. Thanks to [this article](https://itnext.io/using-es6-to-destructure-nested-objects-in-javascript-avoid-undefined-errors-that-break-your-code-612ae67913e9) and [this article](https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8), I was able to learn how to update nested objects.

For example, my state looks kind of like this:
```
this.state = {
  exp0: {
    title: 'Instructional Designer',
    titleEdit: false,
  }
```

If I wanted to edit the 'title' from `true` to `false`, the setState function needs to look like this:
```
this.setState((state) => {
  return {
    exp0: {
      title: !state.exp0.title,
    }
  };
});
```
What a breakthrough! This type of destructuring makes states extremely flexible for me!

UPDATE: After more coding, I learned that the previous code block changed my whole state. I am going to try for this type of code for state updates:
```
const newState = Object.assign({}, this.state);
newState[expName][editName] = !newState[expName][editName];
this.setState(newState);
```

### Destructuring this.state - Is this also legal?
Based on the challenge above, I was able to update a deeply nested state like this:
```
this.setState((state) => {
  return {
    exp0: {
      title: !state.exp0.title,
    }
  };
});
```

I wonder if the following is also legal. It seems to work just fine. :
`this.setState({...this.state, exp0: {title: !this.state.exp0.title}})`

I wonder if this is better or worse than the updater function in the code block above. The [official React doc](https://reactjs.org/docs/react-component.html#setstate), recommends the updater function.

After further investigation, I found [this explanation](https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook).

For the purpose of this project, using the destructured object in setState would still work, however, if I were to use the destructured object twice in a row, then I would run into problems. I plan to make a habit of using the updater function in the first block of code seen above.