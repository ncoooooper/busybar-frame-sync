import {rect, type Frame} from "@shared/surface";
import type {Result} from "@shared/worksheet";

function beatStrip(meter: number, beat: number): Frame {
  const pitch=Math.max(1,Math.floor(22/meter));
  return Array.from({length:meter},(_,i)=>rect("beat"+i,49+i*pitch,i===beat-1?5:9,
    Math.max(1,Math.min(3,pitch-1)),i===beat-1?9:5,i===beat-1?"#DFBDF6FF":"#615675FF"));
}


export function calculate(v:number[]):Result[]{
const [bpm,fps,meter,bar,beat,off]=v;
 if(beat>meter)return [{name:"Beat",value:"Outside bar",detail:["Select a beat <= "+meter]}];
 const time=((bar-1)*meter+beat-1)*60/bpm,frame=Math.round(time*fps)+off;
 const preview=beatStrip(meter,beat);
 return [{preview,name:"Cut frame",value:String(frame),detail:["Bar "+bar+" beat "+beat,"Nearest frame at "+fps+"fps"]},
 {preview,name:"Time",value:(frame/fps).toFixed(2)+"s",detail:["Music "+time.toFixed(3)+" s","Offset "+off+" frames"]}];
}
