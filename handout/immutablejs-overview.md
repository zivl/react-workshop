# ImmutableJS Overview

### Index
  1. Mutable vs. Immutable
  2. Persistent Data Structures
  3. Structural Sharing
  4. ImmutableJS API
  5. Build it into To-Do App (undo, time machine)

### Mutable vs. Immutable

**Mutable** data can be changed by replacing itself with new one. Mutation of data makes application development difficult because it makes the following things hard:

1. Keeping track of mutated data, and
2. Maintaining application state

**Immutable** data cannot be changed, but it can only be copied and then edit the copy. The original data is deleted only if we lose the reference to it.

In JavaScript we have 6 primitive data types:

  1. Boolean
  2. Number
  3. String
  4. Symbol
  5. Null
  6. Undefined

```
Note: Symbol was introduced in ECMAScript 6
```

All of these primitive data types are **immutable** which means their values cannot be changed. For example, assign a string literal ` "Hello" ` to a variable ` str ` and then attempt to change the first character to ` "Y" ` in the following way:

```javascript
var str = 'Hello';
str[0] = 'Y';
console.log(str); // Hello <= did not change 'H' to 'Y'
```

The only way to manipulate strings is through methods such as ` trim `, ` slice `, ` replace ` etc. However, even with those methods the original value does not change:

```javascript
var str1 = 'Hello';
var str2 = str1.replace('H', 'Y');
console.log(str1); // This outputs `Hello` <= this value has not changed
console.log(str2); // This outputs `Yello`
```

Also, number values do not change:
```javascript
var num1 = 12;
var num2 = num1 + 3;


console.log(num1); // num1 is still 12
console.log(num2); // num2 is the new value 15

num1 += 4;         // num1 now points to the new value,
                   //   we just chose not to save it's previous value

console.log(num1); // 16
```

Note that `var num1 = num1 + 3` did not change the meaning of the number `12` to `15`.
Also, in `num1 += 4` we just no longer care about the old value `12` and allowed `num1` to point to the new value and discarded the old one.

In JavaScript, **objects** and **arrays** are **mutable**

```javascript
var arr = [1, 2, 3];
var abc = arr.push(4);

console.log(arr); // [1, 2, 3, 4] <= arr was modified
console.log(abc); // 4            <= We have lost the original array!!
```

With **mutable** data we lose the notion of **time**. In fact mutable data combines **value** and **time**, hence we don't have **OLD** data and **NEW** data, but only the latest.

### Persistent Data Structures

Persistent data structures provides operators which allow users to perform certain manipulation to the data without changing the original and returns the newly updated one. Such data structure is effectively **immutable**.

From our previous example of `Array ` was immutable then pushing an element onto it would return a new array `[1, 2, 3, 4]` i.e. `arr.push(4)` would return `[1, 2, 3, 4]` to `abc`.

Ideally we want something like this:
```javascript
var arr = ImmutableArray([1, 2, 3]);
var newArr = arr.push(4);

console.log(arr.toArray());    // [1,2,3]      <= The old array is preserved
console.log(newArr.toArray()); // [1, 2, 3, 4] <= the new modified array
```

### Structural Sharing

It seems to be a good thing to have **persistent immutable data structures** in JavaScript. Since persistent data structures are not native to the language the only solution is to create an API which would wrap mutable data and enable the users to use it as if it was immutable. Under the covers this API would make a copy of the mutable data, perform certain change to the copy and then return it.
Couple potential issues with this approach are:

1. Might cost too much memory since we keep too many copies and,
2. Too many **copy** operations is expensive.

However, we don't necessarily have to inefficiently copy and cache the data.
In fact **ImmutableJS** takes adventage of **structural sharing** which is implemented with **[Hash Map Tries](https://en.wikipedia.org/wiki/Hash_array_mapped_trie)** and **[Vector Tries](http://hypirion.com/musings/understanding-persistent-vector-pt-1)**.

### ImmutableJS API
ImmutableJS is a library which is inspired by the lack of **persistent** data structures and the difficuly of tracking mutation and maintaining state.
It provides the following data structures

- List
- Stack
- Map
- OrderedMap
- Set
- OrderedSet
- Record

### List
`List` can be used as an **array** but it behaves differently as we are going to see below. `List` exposes some usefult methods such as `push`, `pop`, `set`, `delete`. For full domumentation you can check the [documentataion from Facebook](https://facebook.github.io/immutable-js/docs/#/List)

Here are some examples of how we can use `List`:
```js
// in ES6
import { List } from 'immutable';

let numbers = List.of(1, 2, 3, 4, 5);

let numbersUpdated = numbers.push(6); // 1, 2, 3, 4, 5, 6

// We can convert the List to JS array
console.log(numbers.toJS());        // 1, 2, 3, 4, 5
console.log(numbersUpdated.toJS()); // 1, 2, 3, 4, 5, 6
```
---
**Note:** We can't just `console.log(numbers)` since `numbers` is not a an array. We can however use the `toJS()` method to convert any Immutable data structure into a JS equivalent, as in our case that would be a `List` to an `array`. Also, we can use the `toArray()` method.

---

It is important to distinquish the behaviour of `push` and `pop` between JS `Array` and `List`:

```js
// Regular javascript Array
var arr = [1, 2, 3];
var n1 = arr.push(4);

console.log(n1); // 4

var n2 = arr.pop();

console.log(n2); // 4
```

```js
var list1 = List.of(1, 2, 3);
var list2 = list1.push(4);

console.log(list2.toArray()); // [1, 2, 3, 4]

var list3 = list2.pop();

console.log(list3.toArray()); // [1, 2, 3]
```


```js
 _saveTodo(todo) {
    this._recordHistory();

    this.setState(({data}) => ({
      data: data.update('todoList', (todoList) =>
        (todoList.push(Map({
          item: todo,
          selected: false
        }))
      ))
    }));
  }

  _completeTodo(completedTodoIndex) {
    this._recordHistory();

    this.setState(({data}) => ({
      data: data.update('todoList', (todoList) =>
        todoList.map((todo, index) => {
          return (completedTodoIndex === index) ?
            todo.set('selected', !todo.get('selected')) : todo;
        }))
    }));
  }

  _deleteTodo(todoIndex) {
    this._recordHistory();

    this.setState(({data}) => ({
      data: data.update('todoList', (todoList) =>
        todoList.delete(todoIndex))
    }));
  }
}
```
