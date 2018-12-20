const fs = require('fs-extra')
const path = require('path');
const request = require('request')
const { spawn } = require('child_process');

const args = Array.apply(null, process.argv);
console.log('args: ', args);
console.log('lengths: ', args.length);

let theme = 'staging';
if (args.length > 2) {
    theme = args[2];
}

const envFilePath = path.join(
    process.cwd(),
    `.env.${theme}`);

console.log('envFilePath: ', envFilePath);

// return spawn('vue-cli-service', ['build', '--mode', theme], {
//     stdio: 'inherit'
// });

let configURI = `https://raw.githubusercontent.com/l7960261/ENVLab20181220/master/.env.${theme}`

return request({
    method: 'GET',
    uri: configURI
}, (error, response, body) => {
    // console.log(body);

    return fs.writeFile(envFilePath, body)
        .then(() => spawn('vue-cli-service', ['build', '--mode', theme], {
            stdio: 'inherit'
        }));
});