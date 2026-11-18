import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [bpm,fps,meter,bar,beat,off]=v;
 if(beat>meter)return [{name:"Beat",value:"Outside bar",detail:["Select a beat <= "+meter]}];
 const time=((bar-1)*meter+beat-1)*60/bpm,frame=Math.round(time*fps)+off;
 return [{name:"Cut frame",value:String(frame),detail:["Bar "+bar+" beat "+beat,"Nearest frame at "+fps+"fps"]},
 {name:"Time",value:(frame/fps).toFixed(2)+"s",detail:["Music "+time.toFixed(3)+" s","Offset "+off+" frames"]}];
}
