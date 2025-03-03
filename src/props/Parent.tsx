import { Child, ChildAsFunctionalComponent } from "./Child";

function Parent() {
  function handleClick() {
    alert("Hello");
  }
  return (
    <div>
      <Child color="green" onClick={handleClick} />
      <ChildAsFunctionalComponent color="red" onClick={handleClick}>
        <Child color="orange" onClick={handleClick} />
      </ChildAsFunctionalComponent>
    </div>
  );
}

export default Parent;
