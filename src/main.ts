import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Tempo",
    "unit": " BPM",
    "initial": 120,
    "min": 20,
    "max": 400,
    "step": 1
  },
  {
    "name": "FPS",
    "unit": "",
    "initial": 25,
    "min": 1,
    "max": 240,
    "step": 1
  },
  {
    "name": "Beats/bar",
    "unit": "",
    "initial": 4,
    "min": 1,
    "max": 16,
    "step": 1
  },
  {
    "name": "Bar",
    "unit": "",
    "initial": 9,
    "min": 1,
    "max": 1000,
    "step": 1
  },
  {
    "name": "Beat",
    "unit": "",
    "initial": 1,
    "min": 1,
    "max": 16,
    "step": 1
  },
  {
    "name": "Offset",
    "unit": "fr",
    "initial": 0,
    "min": -10000,
    "max": 10000,
    "step": 1
  }
];
worksheet({name:"Frame Sync",fields,calculate,accent:"#B695F0",motion:{enabled:false}});
