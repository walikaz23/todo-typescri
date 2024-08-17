import Image from "next/image";
import AnimatedBeam from "@/components/animata/background/animated-beam";
import NoteHolder from "@/components/Box";
import Button from "@/components/Submission";

export default function Home() {
  return (
    <AnimatedBeam className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="flex w-dvw h-dvh justify-center  items-center" >
       <div className="bg-[#9359a7] w-2/3 h-fit sm:h-2/3 rounded-3xl p-4 flex flex-row justify-between items-start">
  <NoteHolder heading="Notes" />
  <Button />
</div>
      </div>
      
    </AnimatedBeam>
  );
}
