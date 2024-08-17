import * as React from "react";
import {Marko_One} from "next/font/google"
import Notes from "./Notes";


const markoOne = Marko_One({weight: '400', subsets: ['latin']});

interface NoteHolderProps {
  heading: string;
}

function NoteHolder(props: NoteHolderProps) {
  return (
    <div className="bg-neutral-950 flex  rounded-xl  h-56 w-52 sm:h-5/6  sm:w-1/2  m-4 p-3  flex-col  flex-grow  ">
      <div className="h-12 bg-[#bb88cc]  w-full rounded-lg  ">
        <h1 className={"text-black text-2xl pl-1 pt-2 " + markoOne.className}>
        {props.heading}
      </h1>
      </div>
      <Notes />
      
    </div>
  );
}

export default NoteHolder;