import { ReactNode } from "react";
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "warning" | "high";
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;
export default function InfoBox(props: InfoBoxProps) {
  if (props.mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
}
