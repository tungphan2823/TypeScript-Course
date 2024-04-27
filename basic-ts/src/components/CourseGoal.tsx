import { PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;
export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </article>
  );
}
