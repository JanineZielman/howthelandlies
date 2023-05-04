/**
 * @typedef {import("@prismicio/client").Content.CollapsibleSlice} CollapsibleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollapsibleSlice>} CollapsibleProps
 * @param {CollapsibleProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Collapsible = ({ slice }) => {

  function toggleClass() {
    var element = document.getElementById(slice.id);
    element.classList.toggle("open");
  }

  return (
    <div className="collapsible" id={slice.id}>
      <div className="trigger" onClick={toggleClass}>{slice.primary.title}<div className="line"></div></div>
      <div className="collapsible-content">
        {slice.items.map((item,i) => {
          return(
            <>
            {item.text &&
              <div className="column">
                <PrismicRichText field={item.text}/>
              </div>
            }
            {item.image.url &&
             <div className="column">
              <PrismicNextImage field={item.image} />
             </div>
            }
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Collapsible;
