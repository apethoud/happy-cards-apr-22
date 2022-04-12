export default function HeaderFooter(props) {
  return (
    <div>
      <div className="Logo">HappyCards</div>
      {props.children}
      <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
    </div>
  );
}
