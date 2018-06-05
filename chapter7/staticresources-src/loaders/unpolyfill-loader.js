const loaderUtils = require('loader-utils');

const lockerObjects = [
    'CustomEvent',
    'Event',
    'Storage',
    'Object',
    'Node',
    'Notification',
    'RTCPeerConnection',
    'CanvasRenderingContext2D',
    'Navigator',
    'HTMLIFrameElement',
    'HTMLScriptElement',
];


module.exports = function UnpolyfillLoader (source) {
    const header = 'const _lockerObjects = { ' + 
        lockerObjects.map(o => `'${o}': window.${o}`).join(', ') +
        ' };\n';
    const footer = '\n' +
        lockerObjects.map(o => `window.${o} = _lockerObjects.${o}`).join(';\n') +
        '\n';
    return header + source + footer;
}