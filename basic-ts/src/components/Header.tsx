import { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;
export default function Header(props: HeaderProps) {
  return (
    <header>
      <img src={props.image.src} alt={props.image.alt} />
      {props.children}
    </header>
  );
}
