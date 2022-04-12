export default function HeaderFooter(props) {
  console.log("props is: ", props);
  return (
    <div>
      <div className="HeaderFooterColorBar" />
      <div className="Logo">HappyCards</div>
      {props.children}
      <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
    </div>
  );
}
