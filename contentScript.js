console.log("content script, yoo");
var AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

const oscillator = new OscillatorNode(audioCtx);
const gainNode = new GainNode(audioCtx);

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.context);
console.log(oscillator.numberOfInputs);
console.log(oscillator.numberOfOutputs);
console.log(oscillator.channelCount);