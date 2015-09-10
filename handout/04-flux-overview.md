## FLUX Overview

### MVC vs. Flux

**MVC** stands for **M**odel **V**iew **C**ontrol and is an architecture in which the data flows in two directions. The data flows from the models to the views which means that the number of data pipelines increases as we introduce more models and views. This graph of bidirectional data flows becomes very complicated to grasp and maintain as the application scales.

Flux on the other hand has a unidirectional flow of data. This architecture is consisted of four main parts:

  1. VIEW
  2. ACTION
  3. DISPATCHER
  4. STORE

Since **Flux** has single directional data flow, it is easier for the developers to maintain, debug and test. It creates a simple mental model for the application in the programmer's minds.

### View
In the **Flux** architecture we need our **Views** to react to any change of the application state. For this task we have a perfect library which provides such capability, and yes! You guessed it, that library is **ReactJS**. We will be using React **Components** for our **Veiws** but it is important that **Flux** is framework and library agnostic.

### Action
Actions are a plain JS objects which conventionally look like this:

```js
{
  type: 'ADD_TODO',
  todo: 'Learn Flux'
}
```
They are used to send data from the application's **View** to the **Store** through the **Dispatcher**.
The `type` field holds the type of action that is being performed. This field is required and it should be defined as `string` constant. The other field(s) contain extra parameters for the actions. In the case presented above, we have `todo` which is the TODO item that we are adding.
Similarly, we can have something like this:

```js
{
  type: ActionType.DELETE_ITEM,
  index: 4
}
```

### Action Creator
Action creators are functions which create `actions` and sends them through the **Dispatcher**.

```js
saveTodo(todo) {
  AppDispatcher.handleViewAction({
    type: ActionTypes.TODO_ADDED,
    todo: todo
  });
}
```
Where `handleViewAction()` is implemented in this way:

```js
handleViewAction(action) {
  var payload = {
    source: 'VIEW_ACTION',
    action: action
  };
  this.dispatch(payload); // SIDE EFFECT!
}
```

---
**Note:** The side effect in the `handleViewAction()` is something that we would want to avoid in the future, but for the purpose of this course we would leave it as it is.

---

### Dispatcher
**Dispatcher** is a single mechanism which controls the data flow in a **Flux** application. It ensures that no more than one action is dispatched to the **Store** in a specific order (synchronously). It provides a `waitFor` method to ensures that the actions happen in the order in which they come in.

### Store
The **Stores** bring all the other Flux components together. They contain the application logic and the **state**.
Also, **stores** listen for actions from the **dispatcher**, in order to get notified about when to update the state. So when an action triggers a state change, the stores broadcast an event to all the view components that are listening. When that happens the view components update themselves.

