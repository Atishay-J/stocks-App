function SideMenuBtn(props) {
  return (
    <div id="sideBtnCont">
      <img className="sideBtnImg" src={props.url} alt="Side Button img" />
      <h5 className="sideBtnName">{props.name}</h5>
    </div>
  );
}
export default SideMenuBtn;
