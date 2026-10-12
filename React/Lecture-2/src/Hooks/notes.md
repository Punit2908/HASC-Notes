
`useState` is one of the **most important React concepts**. If students understand state properly, later topics like forms, APIs, shopping carts, authentication, `useEffect`, Context API, and reducers become much easier.

The key idea is simple:

> **State is data that belongs to a component and can change over time. When state changes, React re-renders the component so the UI can reflect the new state.**

---

# 1. What is State?

In a normal JavaScript program, we can store data in variables:

```
let count = 0;

count = count + 1;
```

The variable changes.

But in React, simply changing a normal variable does **not** tell React that the UI needs to update.

Example:

```
function App() {
  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
```

You click the button.

Console:

```
1
2
3
```

But the screen may continue showing:

```
0
```

Why?

Because:

```
count++;
```

changes a normal JavaScript variable.

It does **not** tell React:

> "Hey React, the UI needs to be rendered again."

And React, mercifully, doesn't monitor every random variable in your program.

---

# 2. What is `useState`?

`useState` is a React Hook that lets a functional component:

- store data
- change that data
- trigger a re-render when the data changes

Basic syntax:

```
const [state, setState] = useState(initialValue);
```

Example:

```
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
```

---

# 3. Understanding This Line

This line:

```
const [count, setCount] = useState(0);
```

contains several concepts.

### `useState(0)`

Creates state with initial value:

```
0
```

### `count`

The current state value.

```
count
```

### `setCount`

The function used to update the state.

```
setCount(...)
```

So:

```
const [count, setCount] = useState(0);
```

means approximately:

```
Current value → count

Update function → setCount

Initial value → 0
```

---

# 4. Why Do We Use `[count, setCount]`?

This is JavaScript **array destructuring**.

Conceptually:

```
const result = useState(0);
```

React gives us something conceptually like:

```
[0, updateFunction]
```

Then:

```
const [count, setCount] = result;
```

So:

```
count     → current state
setCount  → function to update state
```

The names are not special.

You could technically write:

```
const [x, updateX] = useState(0);
```

But we normally follow:

```
[value, setValue]
```

Examples:

```
const [name, setName] = useState("");

const [age, setAge] = useState(18);

const [isLoggedIn, setIsLoggedIn] = useState(false);

const [products, setProducts] = useState([]);
```

---

# 5. Importing `useState`

Before using it:

```
import { useState } from "react";
```

Then:

```
const [count, setCount] = useState(0);
```

Modern React also supports using React APIs through the React namespace, for example:

```
import * as React from "react";

const [count, setCount] = React.useState(0);
```

But for teaching and normal code, this is cleaner:

```
import { useState } from "react";
```

---

# 6. What is a Hook?

A **Hook** is a React function that lets functional components use React features.

Examples:

```
useState
useEffect
useRef
useContext
useReducer
useMemo
useCallback
```

`useState` gives a component state.

`useEffect` handles effects.

`useRef` stores mutable references.

And so on.

---

# 7. Why Is `useState` Called a Hook?

Because:

```
useState()
```

is a React Hook.

React Hook names conventionally start with:

```
use
```

Examples:

```
useState
useEffect
useRef
useContext
```

---

# 8. First Important Rule of Hooks

Hooks must be called **at the top level of a component or another custom Hook**.

Correct:

```
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

Incorrect:

```
function App() {
  if (true) {
    const [count, setCount] = useState(0);
  }

  return <h1>Hello</h1>;
}
```

Don't put Hooks inside:

```
if
for
while
nested functions
event handlers
```

---

# 9. Why Can't Hooks Be Inside Conditions?

React needs to keep track of Hooks in a predictable order between renders.

Bad:

```
if (isLoggedIn) {
  useState();
}
```

Suppose:

```
Render 1:
useState
useEffect
useRef

Render 2:
useEffect
useRef
```

The Hook order changes.

That creates problems for React's Hook bookkeeping.

Therefore:

> **Call Hooks at the top level, every render, in the same order.**

---

# 10. State Update Causes Re-render

This is the most important concept.

Suppose:

```
const [count, setCount] = useState(0);
```

Initially:

```
count = 0
```

Then:

```
setCount(1);
```

React schedules an update.

Conceptually:

```
setCount(1)
      ↓
State becomes 1
      ↓
React re-renders component
      ↓
JSX uses count = 1
      ↓
UI displays 1
```

---

# 11. Re-render Does NOT Mean Full Page Reload

This is important.

When state changes:

```
setCount(count + 1);
```

React doesn't normally reload the entire webpage like:

```
Browser refresh
↓
HTML downloaded again
↓
Everything starts from scratch
```

Instead, React re-renders the relevant component tree and reconciles the UI.

So:

```
State change
    ↓
React render
    ↓
Reconciliation
    ↓
Necessary DOM updates
```

---

# 12. State Is Preserved Between Renders

Example:

```
function App() {
  const [count, setCount] = useState(0);

  console.log("Rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

When component renders again, `count` doesn't go back to `0`.

It becomes:

```
0
↓
1
↓
2
↓
3
```

React remembers the state value for that component.

---

# 13. Initial State

The value passed to `useState()` is the **initial state**.

```
const [count, setCount] = useState(0);
```

Initial value:

```
0
```

String:

```
const [name, setName] = useState("Punit");
```

Boolean:

```
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Array:

```
const [items, setItems] = useState([]);
```

Object:

```
const [user, setUser] = useState({
  name: "Punit",
  age: 20
});
```

---

# 14. State Can Store Different Data Types

`useState` isn't limited to numbers.

## Number

```
const [age, setAge] = useState(20);
```

## String

```
const [name, setName] = useState("Punit");
```

## Boolean

```
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

## Array

```
const [students, setStudents] = useState([]);
```

## Object

```
const [user, setUser] = useState({
  name: "Punit",
  age: 20
});
```

---

# 15. Updating State

Suppose:

```
const [count, setCount] = useState(0);
```

Update:

```
setCount(10);
```

Now:

```
count = 10
```

Another example:

```
const [name, setName] = useState("Punit");

setName("Rahul");
```

Now:

```
name = Rahul
```

---

# 16. State Should Not Be Modified Directly

This is **wrong**:

```
count = count + 1;
```

Also:

```
count++;
```

Don't directly modify state.

Use:

```
setCount(count + 1);
```

Why?

Because the setter tells React that state has changed.

---

# 17. Example: Counter

```
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={increase}>
        +
      </button>

      <button onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default App;
```

---

# 18. State Setter Does Not Immediately Change the Current Variable

This is a very important concept.

Consider:

```
function handleClick() {
  setCount(count + 1);

  console.log(count);
}
```

You might expect:

```
1
```

But the current render's `count` value can still be:

```
0
```

because state updates are scheduled for the next render.

Think:

```
Current render
      ↓
count = 0

setCount(1)
      ↓
React schedules update

Current function continues
      ↓
count is still 0 here

Next render
      ↓
count = 1
```

---

# 19. State Updates Are Batching-Friendly

React can batch multiple state updates together.

Example:

```
function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

A beginner might expect:

```
0 → 3
```

But because all three expressions may use the same `count` from the current render:

```
count + 1
```

they can all effectively request:

```
setCount(1)
```

So the result can be:

```
1
```

This leads to one of the most important `useState` features:

# Functional State Updates

---

# 20. Functional State Update

Instead of:

```
setCount(count + 1);
```

use:

```
setCount(prevCount => prevCount + 1);
```

Here:

```
prevCount
```

means the latest previous state value available to React for that update.

Example:

```
function handleClick() {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}
```

Now the updates can be applied sequentially:

```
0
↓
1
↓
2
↓
3
```

Result:

```
3
```

---

# 21. When Should We Use Functional Updates?

Use them when the new state depends on the previous state.

For example:

```
setCount(prev => prev + 1);
```

Good.

```
setAge(prev => prev + 1);
```

Good.

Toggling:

```
setIsOpen(prev => !prev);
```

Good.

Adding to an array:

```
setItems(prev => [...prev, newItem]);
```

Good.

---

# 22. Toggle Example

A very common React pattern:

```
const [isOpen, setIsOpen] = useState(false);
```

Toggle:

```
setIsOpen(prev => !prev);
```

Complete:

```
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(prev => !prev)}>
        Toggle
      </button>

      {isOpen && <p>Hello React!</p>}
    </div>
  );
}
```

Flow:

```
false
 ↓
true
 ↓
false
 ↓
true
```

---

# 23. Multiple State Variables

A component can have multiple states.

```
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{isStudent ? "Student" : "Not Student"}</p>
    </div>
  );
}
```

Each state has its own:

```
value
+
setter
```

---

# 24. When Should You Use Multiple State Variables?

Use separate state variables when values represent independent pieces of state.

Good:

```
const [name, setName] = useState("");
const [age, setAge] = useState(18);
const [isAdmin, setIsAdmin] = useState(false);
```

This is easier to understand.

---

# 25. Object State

You can store an object:

```
const [user, setUser] = useState({
  name: "Punit",
  age: 20,
  city: "Kaithal"
});
```

Display:

```
<h1>{user.name}</h1>
<p>{user.age}</p>
<p>{user.city}</p>
```

---

# 26. Updating Object State

This is where beginners frequently commit crimes against immutability.

Don't:

```
user.name = "Rahul";
```

Instead:

```
setUser({
  ...user,
  name: "Rahul"
});
```

The spread operator copies the existing properties.

Example:

```
function App() {
  const [user, setUser] = useState({
    name: "Punit",
    age: 20
  });

  function changeName() {
    setUser({
      ...user,
      name: "Rahul"
    });
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}
```

---

# 27. Why Spread Operator?

Suppose:

```
user = {
  name: "Punit",
  age: 20
};
```

If we do:

```
setUser({
  name: "Rahul"
});
```

we lose:

```
age
```

New state becomes:

```
{
  name: "Rahul"
}
```

Instead:

```
setUser({
  ...user,
  name: "Rahul"
});
```

produces:

```
{
  name: "Rahul",
  age: 20
}
```

---

# 28. Object State with Functional Update

Even better when the new object depends on previous state:

```
setUser(prevUser => ({
  ...prevUser,
  name: "Rahul"
}));
```

This is especially useful when multiple updates may happen.

---

# 29. Array State

Example:

```
const [students, setStudents] = useState([
  "Aman",
  "Riya",
  "Karan"
]);
```

Render:

```
<ul>
  {students.map(student => (
    <li key={student}>{student}</li>
  ))}
</ul>
```

---

# 30. Adding to an Array

Don't:

```
students.push("Rahul");
```

Instead:

```
setStudents(prev => [
  ...prev,
  "Rahul"
]);
```

Complete:

```
function addStudent() {
  setStudents(prev => [
    ...prev,
    "Rahul"
  ]);
}
```

---

# 31. Removing From an Array

Use `filter()`.

```
setStudents(prev =>
  prev.filter(student => student !== "Riya")
);
```

Example:

```
Before:
Aman
Riya
Karan

Remove Riya

After:
Aman
Karan
```

---

# 32. Updating an Array Item

Suppose:

```
const [students, setStudents] = useState([
  { id: 1, name: "Aman", marks: 80 },
  { id: 2, name: "Riya", marks: 90 }
]);
```

Update Riya's marks:

```
setStudents(prev =>
  prev.map(student =>
    student.id === 2
      ? { ...student, marks: 95 }
      : student
  )
);
```

---

# 33. State with Objects Inside Arrays

This is extremely common in real applications.

Example:

```
const [products, setProducts] = useState([
  {
    id: 1,
    name: "Keyboard",
    price: 999
  },
  {
    id: 2,
    name: "Mouse",
    price: 499
  }
]);
```

Update price:

```
setProducts(prev =>
  prev.map(product =>
    product.id === 1
      ? { ...product, price: 899 }
      : product
  )
);
```

---

# 34. State and Forms

`useState` is heavily used with forms.

Example:

```
const [name, setName] = useState("");
```

Input:

```
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Complete:

```
function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}
```

Flow:

```
User types
    ↓
onChange
    ↓
setName()
    ↓
state changes
    ↓
component re-renders
    ↓
input/UI updates
```

---

# 35. Controlled Components

When React state controls an input, it's called a **controlled component**.

Example:

```
const [email, setEmail] = useState("");
```

```
<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

React controls the input's value.

---

# 36. Multiple Inputs

```
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
}
```

---

# 37. Checkbox State

```
function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />

      Accept Terms
    </label>
  );
}
```

Important:

For checkbox:

```
e.target.checked
```

For text:

```
e.target.value
```

---

# 38. Radio Buttons

```
function App() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <p>Selected: {gender}</p>
    </div>
  );
}
```

---

# 39. Select Dropdown

```
function App() {
  const [course, setCourse] = useState("");

  return (
    <div>
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        <option value="react">React</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>

      <p>Course: {course}</p>
    </div>
  );
}
```

---

# 40. State and Conditional Rendering

State is commonly used to decide what should appear.

```
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Then:

```
{isLoggedIn ? (
  <h1>Welcome</h1>
) : (
  <h1>Please Login</h1>
)}
```

Button:

```
<button onClick={() => setIsLoggedIn(true)}>
  Login
</button>
```

---

# 41. State and Toggle UI

Example: Show/Hide password.

```
function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
      />

      <button
        onClick={() =>
          setShowPassword(prev => !prev)
        }
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}
```

---

# 42. Lazy Initial State

Sometimes calculating the initial state is expensive.

You can give `useState` a function:

```
const [value, setValue] = useState(() => expensiveCalculation());
```

React can use the initializer function to calculate the initial state.

Example:

```
function getInitialCount() {
  console.log("Calculating...");
  return 100;
}

function App() {
  const [count, setCount] = useState(getInitialCount);

  return <h1>{count}</h1>;
}
```

Notice:

```
useState(getInitialCount)
```

not:

```
useState(getInitialCount())
```

The second one calls the function immediately during rendering.

---

# 43. `useState(() => ...)` vs `useState(...)`

Compare:

```
useState(expensiveCalculation())
```

The calculation happens while rendering.

Whereas:

```
useState(() => expensiveCalculation())
```

provides an initializer function.

Use the function form when initial state computation is expensive or when initialization needs to be performed lazily.

For simple values:

```
useState(0)
```

is perfectly fine.

Don't turn every tiny variable into a performance engineering project.

---

# 44. Lazy Initialization with LocalStorage

A common practical example:

```
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});
```

This reads the initial value when initializing state.

Later we'll combine this with `useEffect`.

---

# 45. State and LocalStorage

State itself disappears when the page is fully refreshed.

Example:

```
const [name, setName] = useState("Punit");
```

Refresh the browser.

State starts again from:

```
"Punit"
```

If the user changed it to something else, that state is gone unless persisted somewhere.

LocalStorage can persist it:

```
localStorage.setItem("name", name);
```

We'll study the proper React + LocalStorage pattern later using `useEffect`.

---

# 46. State Is Local to a Component

Suppose:

```
function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

If we render:

```
<Counter />
<Counter />
```

each instance gets its **own state**.

Conceptually:

```
Counter #1
count = 0

Counter #2
count = 0
```

If Counter #1 becomes:

```
5
```

Counter #2 doesn't automatically become 5.

---

# 47. State Belongs to a Component Instance

Example:

```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {count}
    </button>
  );
}

function App() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}
```

You now have:

```
Counter A → 0
Counter B → 0
```

Click A:

```
Counter A → 1
Counter B → 0
```

---

# 48. Sharing State Between Components

Suppose two sibling components need the same state.

Don't create separate states and expect them to magically synchronize.

Instead, move the state to their common parent.

This is called:

# Lifting State Up

Example:

```
App
│
├── SearchBar
│
└── ProductList
```

State:

```
function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductList search={search} />
    </>
  );
}
```

We'll study this deeply later.

---

# 49. State vs Props

This distinction is extremely important.

|State|Props|
|---|---|
|Managed by component|Passed by parent|
|Can change using setter|Read-only to child|
|Created with `useState`|Received as function parameters|
|Used for changing data|Used to pass data|
|Component controls it|Parent controls it|

Example:

```
const [count, setCount] = useState(0);
```

That's state.

```
<Product name="Keyboard" />
```

`name` is a prop.

---

# 50. State vs Normal Variable

|Normal Variable|State|
|---|---|
|`let count = 0`|`useState(0)`|
|Changing it doesn't trigger React render|Setter triggers state update|
|Value can reset when component renders|React preserves state between renders|
|Useful for temporary calculations|Useful for UI data that changes|

---

# 51. State Should Represent UI-Relevant Data

Good state:

```
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Because UI depends on it.

Good:

```
const [selectedProduct, setSelectedProduct] = useState(null);
```

Good:

```
const [search, setSearch] = useState("");
```

---

# 52. Don't Store Unnecessary Derived State

Suppose:

```
const [firstName, setFirstName] = useState("Punit");
const [lastName, setLastName] = useState("Jangra");
```

Don't necessarily create:

```
const [fullName, setFullName] = useState("Punit Jangra");
```

because:

```
fullName = firstName + " " + lastName
```

can be calculated:

```
const fullName = `${firstName} ${lastName}`;
```

This is called **derived data**.

---

# 53. Avoid Duplicate State

Bad:

```
const [price, setPrice] = useState(100);
const [quantity, setQuantity] = useState(2);
const [total, setTotal] = useState(200);
```

Now you have to keep:

```
price
quantity
total
```

synchronized.

Better:

```
const [price, setPrice] = useState(100);
const [quantity, setQuantity] = useState(2);

const total = price * quantity;
```

Now:

```
price changes
     ↓
total recalculates
```

No third state required.

---

# 54. State Initialization with Objects

You can initialize complex data:

```
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
});
```

Update one property:

```
setForm(prev => ({
  ...prev,
  name: "Punit"
}));
```

---

# 55. Form Example Using One Object State

```
function App() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <p>{form.name}</p>
      <p>{form.email}</p>
    </form>
  );
}
```

This pattern becomes extremely useful in real applications.

---

# 56. State and Event Object

Consider:

```
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Here:

```
e
```

is the event object.

```
e.target
```

is the input.

```
e.target.value
```

is what the user typed.

---

# 57. State Update with Previous State

The general pattern:

```
setState(prev => newValue);
```

Examples:

### Number

```
setCount(prev => prev + 1);
```

### Boolean

```
setIsOpen(prev => !prev);
```

### Array

```
setItems(prev => [...prev, newItem]);
```

### Object

```
setUser(prev => ({
  ...prev,
  name: "Rahul"
}));
```

Students should become very comfortable with these four patterns.

---

# 58. Updating State Multiple Times

Bad assumption:

```
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

When each update depends on the previous value, prefer:

```
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

This communicates:

> "Take whatever the latest state value is and calculate the next one."

---

# 59. Never Mutate State

## Wrong

```
const [user, setUser] = useState({
  name: "Punit",
  age: 20
});

user.age = 21;
```

## Correct

```
setUser(prev => ({
  ...prev,
  age: 21
}));
```

---

# 60. Arrays: Wrong vs Correct

### Wrong

```
students.push("Rahul");
```

### Correct

```
setStudents(prev => [
  ...prev,
  "Rahul"
]);
```

### Remove

```
setStudents(prev =>
  prev.filter(student => student !== "Rahul")
);
```

### Update

```
setStudents(prev =>
  prev.map(student =>
    student.id === id
      ? { ...student, name: "Rahul" }
      : student
  )
);
```

---

# 61. `useState` with `null`

Sometimes you don't have data initially.

Example:

```
const [selectedUser, setSelectedUser] = useState(null);
```

Later:

```
setSelectedUser({
  name: "Punit",
  age: 20
});
```

Conditional:

```
{selectedUser && (
  <h2>{selectedUser.name}</h2>
)}
```

This is very common when working with APIs.

---

# 62. `useState` with `undefined`

Possible:

```
const [user, setUser] = useState();
```

But for many UI cases, explicitly using:

```
useState(null)
```

is clearer because it communicates:

> "There is currently no selected/loaded value."

---

# 63. State and API Data

Later, when fetching API data, we commonly use:

```
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Conceptually:

```
users
↓
API data

loading
↓
is API request happening?

error
↓
did request fail?
```

This is where `useState` becomes much more powerful than the counter examples everybody starts with.

---

# 64. State and Loading UI

```
const [loading, setLoading] = useState(true);

return (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <p>Data loaded!</p>
    )}
  </div>
);
```

---

# 65. State and Error UI

```
const [error, setError] = useState(null);

return (
  <div>
    {error && (
      <p>Error: {error}</p>
    )}
  </div>
);
```

---

# 66. State Can Store Functions

JavaScript allows functions as values.

But there is an important distinction.

If you want state itself to contain a function, you need to use the lazy-initializer form carefully.

For example:

```
const [fn, setFn] = useState(() => {
  return () => console.log("Hello");
});
```

Why the extra function?

Because:

```
useState(someFunction)
```

is interpreted by React as an initializer function.

This is an advanced edge case. Students don't need to use function state frequently.

---

# 67. State Setter Can Receive a Value

```
setCount(10);
```

---

# 68. State Setter Can Receive a Function

```
setCount(prev => prev + 1);
```

These are the two major forms:

```
setState(value)

setState(previousState => nextState)
```

---

# 69. State Updates Should Be Pure

Avoid doing unrelated side effects inside state calculations.

Prefer:

```
setCount(prev => prev + 1);
```

not something like:

```
setCount(prev => {
  console.log("random side effect");
  fetch("/api");
  return prev + 1;
});
```

Side effects belong in appropriate places, especially `useEffect` when applicable.

---

# 70. Strict Mode and Development Behavior

In development, React Strict Mode can intentionally invoke certain functions more than once to help detect impure logic.

If you see:

```
console.log()
console.log()
```

during development, don't immediately conclude React has developed a personal vendetta.

Example:

```
<StrictMode>
  <App />
</StrictMode>
```

This is normal development behavior designed to surface certain issues.

Production behavior is different.

---

# 71. State and Component Re-rendering

Consider:

```
function App() {
  const [count, setCount] = useState(0);

  console.log("Render");

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {count}
    </button>
  );
}
```

When state changes:

```
Render
↓
click
↓
setCount
↓
Render
↓
click
↓
setCount
↓
Render
```

The function component runs again to calculate the next UI.

---

# 72. Does Re-render Destroy State?

No.

This is a common misunderstanding.

```
const [count, setCount] = useState(0);
```

Component function runs again, but React associates the state with that component instance.

So:

```
Render 1 → count = 0
Render 2 → count = 1
Render 3 → count = 2
```

State persists across renders.

---

# 73. State Reset

State can reset when React treats a component as a different component identity, such as when its position/key changes in certain ways.

A simple example is conditional rendering that removes a component from the tree:

```
{show && <Counter />}
```

If:

```
show = true
```

Counter exists.

If:

```
show = false
```

Counter is removed.

If it is mounted again, its initial state can start over.

This becomes important later when studying **keys and component identity**.

---

# 74. `key` Can Reset State

You can intentionally reset component state by changing its `key`.

Example:

```
<ProfileForm key={userId} userId={userId} />
```

When:

```
userId = 1
```

and then:

```
userId = 2
```

React sees a different key and can treat it as a new component instance, resetting its state.

This is an advanced but very useful state concept.

---

# 75. State Placement

A very important architectural question:

> **Where should state live?**

Suppose:

```
App
│
├── Navbar
├── Search
└── Products
```

If Search and Products both need:

```
searchTerm
```

state should usually live in their closest common parent:

```
App
│
├── Search
│
└── Products
```

So:

```
App
↓
search state
↓
Search + Products
```

This is:

# Lifting State Up

---

# 76. State Colocation

Don't automatically put every piece of state in `App`.

If a modal is only used inside:

```
ProductCard
```

then its state can stay inside ProductCard:

```
const [isOpen, setIsOpen] = useState(false);
```

This is called keeping state **close to where it is used**.

Good architecture asks:

> Who actually needs this state?

---

# 77. Local State vs Global State

### Local state

```
const [isOpen, setIsOpen] = useState(false);
```

Only the component needs it.

### Shared/global-ish state

Example:

```
Logged-in user
Theme
Shopping cart
```

Multiple unrelated components may need it.

Later we can use:

```
Context API
useReducer
External state libraries
```

Don't use global state for everything.

A global variable graveyard is not architecture.

---

# 78. `useState` and Immutability

React state should generally be treated as immutable.

That means instead of modifying existing objects/arrays:

```
Create a new object/array
```

Example:

```
setUser(prev => ({
  ...prev,
  age: 21
}));
```

Array:

```
setItems(prev => [
  ...prev,
  newItem
]);
```

This makes state changes predictable.

---

# 79. Complete Example: Todo App with `useState`

This combines many concepts.

```
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos(prev => [...prev, newTodo]);
    setTask("");
  }

  function deleteTodo(id) {
    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    );
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>
              {todo.text}
            </span>

            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

This one example uses:

```
useState
↓
String state
↓
Array state
↓
Object state
↓
Functional updates
↓
Spread operator
↓
map()
↓
filter()
↓
Conditional rendering
↓
Controlled input
↓
Events
```

That's why `useState` is such a foundational topic.

---

# 80. Common `useState` Mistakes

## Mistake 1: Forgetting the import

```
const [count, setCount] = useState(0);
```

without:

```
import { useState } from "react";
```

---

## Mistake 2: Direct mutation

```
count++;
```

Wrong.

```
setCount(prev => prev + 1);
```

Correct.

---

## Mistake 3: Mutating arrays

```
items.push(newItem);
```

Wrong.

```
setItems(prev => [...prev, newItem]);
```

Correct.

---

## Mistake 4: Mutating objects

```
user.name = "Rahul";
```

Wrong.

```
setUser(prev => ({
  ...prev,
  name: "Rahul"
}));
```

Correct.

---

## Mistake 5: Calling setter incorrectly

```
onClick={setCount(count + 1)}
```

This executes during rendering.

Wrong.

Use:

```
onClick={() => setCount(count + 1)}
```

or:

```
onClick={() => setCount(prev => prev + 1)}
```

---

# 81. Mistake: Using State for Everything

Don't do:

```
const [fullName, setFullName] = useState("");
```

if:

```
const fullName = firstName + " " + lastName;
```

can derive it.

Use state for **data that needs to be remembered and whose change affects the UI**.

---

# 82. Mistake: Too Many Related State Variables

Instead of:

```
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
```

sometimes an object is cleaner:

```
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  city: ""
});
```

But this isn't an absolute rule.

For small independent values, separate states can be more readable.

---

# 83. Choosing State Structure

Ask these questions:

### Question 1

Does the UI need this value?

If no:

```
Maybe it doesn't need state.
```

### Question 2

Can it be calculated from existing state?

If yes:

```
Don't duplicate it.
```

### Question 3

Do multiple components need it?

If yes:

```
Consider lifting it up.
```

### Question 4

Is the data logically related?

If yes:

```
Consider an object.
```

---

# 84. `useState` Cheat Sheet

### Basic

```
const [count, setCount] = useState(0);
```

### Set value

```
setCount(10);
```

### Previous state

```
setCount(prev => prev + 1);
```

### Boolean

```
const [open, setOpen] = useState(false);

setOpen(prev => !prev);
```

### String

```
const [name, setName] = useState("");
```

### Array

```
const [items, setItems] = useState([]);

setItems(prev => [...prev, item]);
```

### Remove array item

```
setItems(prev =>
  prev.filter(item => item.id !== id)
);
```

### Object

```
const [user, setUser] = useState({
  name: "",
  age: 0
});
```

### Update object

```
setUser(prev => ({
  ...prev,
  name: "Rahul"
}));
```

### Array of objects

```
const [users, setUsers] = useState([]);
```

### Update array object

```
setUsers(prev =>
  prev.map(user =>
    user.id === id
      ? { ...user, name: "Rahul" }
      : user
  )
);
```

---

# 85. The Most Important `useState` Mental Model

Students should remember this:

```
                useState
                   │
                   ↓
             Store UI Data
                   │
                   ↓
            [value, setter]
                   │
          ┌────────┴────────┐
          ↓                 ↓
       value            setValue()
          │                 │
          ↓                 ↓
       Display         Update State
                           │
                           ↓
                       Re-render
                           │
                           ↓
                       Updated UI
```

And when updating complex state:

```
Previous State
      ↓
Create New State
      ↓
Setter Function
      ↓
React Re-renders
      ↓
UI reflects new state
```

---

# 86. The 10 Rules Students Should Memorize

1. **Use `useState` when a component needs to remember changing data.**
    
2. **Never directly modify state.**
    
3. Use the setter:
    

```
setState(...)
```

4. If new state depends on previous state:

```
setState(prev => ...)
```

5. Objects should usually be updated with a new object:

```
{ ...prev, changedProperty }
```

6. Arrays should usually be updated with:

```
map()
filter()
spread
```

7. Don't store unnecessary derived data as state.
    
8. Keep state close to the component that needs it.
    
9. Lift state up when multiple components need the same state.
    
10. Hooks must be called at the top level of components/custom Hooks.
    

---

# 87. Practice Tasks

### Beginner

**1. Counter**

Create:

```
+
Count
-
Reset
```

---

**2. Toggle**

Create a button:

```
Show
```

Click:

```
Hide
```

and toggle some text.

---

**3. Like Button**

```
❤️ Like
```

Click:

```
❤️ Liked
```

and maintain a like count.

---

### Intermediate

**4. Shopping Cart**

Store:

```
[
  {
    id: 1,
    name: "Keyboard",
    price: 999,
    quantity: 1
  }
]
```

Implement:

- Add
- Remove
- Increase quantity
- Decrease quantity
- Total

---

**5. Student Form**

Use state to manage:

```
Name
Email
Age
Course
```

Display submitted student information.

---

### Advanced

**6. Todo App**

Use:

```
useState
objects
arrays
map
filter
conditional rendering
forms
```

Features:

- Add
- Delete
- Complete
- Undo
- Search
- Filter

---

## Final Concept

If students understand only one thing from this entire topic, make it this:

```
const [value, setValue] = useState(initialValue);
```

means:

> **React, please remember this value for this component. When I use the setter to change it, update the component's UI using the new value.**

Everything else, from counters to shopping carts to forms to API loading states, is basically increasingly sophisticated use of that idea.

And the three state-update patterns worth drilling until they become muscle memory are:

```
// Replace
setValue(newValue);

// Based on previous state
setValue(prev => newValueBasedOnPrev);

// Object/array update
setValue(prev => ({
  ...prev,
  changedProperty: newValue
}));
```

Those three patterns will carry students surprisingly far before React starts throwing its next collection of abstractions at them.