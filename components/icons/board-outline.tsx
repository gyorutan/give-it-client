import { SVGProps } from "react";

export function BoardOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 17q.425 0 .713-.288T9 16q0-.425-.288-.712T8 15q-.425 0-.712.288T7 16q0 .425.288.713T8 17m0-4q.425 0 .713-.288T9 12q0-.425-.288-.712T8 11q-.425 0-.712.288T7 12q0 .425.288.713T8 13m0-4q.425 0 .713-.288T9 8q0-.425-.288-.712T8 7q-.425 0-.712.288T7 8q0 .425.288.713T8 9m4 8h4q.425 0 .713-.288T17 16q0-.425-.288-.712T16 15h-4q-.425 0-.712.288T11 16q0 .425.288.713T12 17m0-4h4q.425 0 .713-.288T17 12q0-.425-.288-.712T16 11h-4q-.425 0-.712.288T11 12q0 .425.288.713T12 13m0-4h4q.425 0 .713-.288T17 8q0-.425-.288-.712T16 7h-4q-.425 0-.712.288T11 8q0 .425.288.713T12 9M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
      ></path>
    </svg>
  );
}
