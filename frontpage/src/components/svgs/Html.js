import * as React from "react";

function SvgHtml(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path fill="#E34F26" d="M71 460L30 0h451l-41 460-185 52" />
      <path fill="#EF652A" d="M256 472l149-41 35-394H256" />
      <path
        fill="#EBEBEB"
        d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm0 147h-1l-63-17-4-45h-56l7 89 116 32h1z"
      />
      <path
        fill="#FFF"
        d="M255 208v57h70l-7 73-63 17v59l116-32 1-10 13-149 2-15h-16zm0-114v56h137l1-12 3-29 1-15z"
      />
    </svg>
  );
}

export default SvgHtml;
