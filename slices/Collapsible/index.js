/**
 * @typedef {import("@prismicio/client").Content.CollapsibleSlice} CollapsibleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollapsibleSlice>} CollapsibleProps
 * @param {CollapsibleProps}
 */
const Collapsible = ({ slice }) => {
  // console.log(slice)
  return (
    <div className="collapsible">
      <div className="trigger">{slice.primary.title}<div className="line"></div></div>
      <div className="collapsible-content">
        {slice.items.map((item,i) => {
          return(
            <div className="column">

            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Collapsible;
