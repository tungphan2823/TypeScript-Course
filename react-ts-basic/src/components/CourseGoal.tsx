import {  PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{ title: string }>;
export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <button>Delete</button>
    </article>
  );
}
