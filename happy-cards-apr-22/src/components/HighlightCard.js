export default function HighlightCard(props) {
  console.log("props is: ", props);
  return (
    <div className="HighlightCard">
      <div className="HighlightCard-Icon"></div>
      <div className="HighlightCard-Header">{props.header}</div>
      <div className="HighlightCard-Subtext"></div>
    </div>
  );
}
