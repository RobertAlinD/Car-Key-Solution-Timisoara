import Header from "../Header/Header";

export function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
