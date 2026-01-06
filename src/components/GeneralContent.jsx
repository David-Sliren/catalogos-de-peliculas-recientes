import React from "react";

function GeneralContent({ children, clases = "" }) {
  return (
    <section
      className={`${clases} relative z-0 grid grid-cols-4 gap-6 bg-amber-200 w-full px-6 xl:grid-cols-12`}
    >
      {children}{" "}
    </section>
  );
}

export default GeneralContent;
