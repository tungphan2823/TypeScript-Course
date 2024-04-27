import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;
type AnchorButton = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
export default function Button(props: ButtonProps | AnchorButton) {
  if (props.el === "anchor") {
    return <a className="button" {...props} />;
  }
  return <button className="button" {...props}></button>;
}
