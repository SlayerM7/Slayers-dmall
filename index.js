try {
const {  red, white, green, blackBright, magentaBright } = require('chalk');
const { Client } = require('discord.js')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const client = new Client();

rl.question("Enter token: ", (token) => {

    if (token.startsWith("\"") && token.endsWith("\"")) {
        token = token.slice(1, token.length - 1);
    };

client.on('ready', () => {

    console.clear();
    function s() {
        console.log(`                                        `)
        console.log(`                                        `)
        console.log(`                                        `)
    
        console.log(white(`                ╔═╗╦  ╔═╗╦ ╦╔═╗╦═╗╔═╗  ╔╦╗╔╦╗╔═╗╦  ╦ `))
        console.log(blackBright(`                ╚═╗║  ╠═╣╚╦╝║╣ ╠╦╝╚═╗   ║║║║║╠═╣║  ║ `))
        console.log(magentaBright(`                ╚═╝╩═╝╩ ╩ ╩ ╚═╝╩╚═╚═╝  ═╩╝╩ ╩╩ ╩╩═╝╩═╝`))

        console.log(`                                                `)
        console.log(`                      Ready to dm: ${client.users.size} users               `)
        console.log(`                                        `)
        console.log(`                                        `)
        console.log(`                                        `)

    }
    s();
        rl.question("            Enter Message: ", (msg) => {
            let count = 0;
        rl.question('            Type anything to start: ', () => {
            console.clear();
            s();
            client.users.map(user => {
                try {
                user.send(msg).then(() => {
                    client.on('rateLimit', () => {
                        console.log(magentaBright('     [')+white('!')+magentaBright(']')+white(` Rate limited , Sleeping for `)+ magentaBright('0 ') + white('seconds'))
                    })
                    count++
                    console.log(magentaBright('     [')+white('+')+magentaBright(']')+white(` Successfully dmed `)+ magentaBright(user.id))
                }).catch(() => {
                    console.log(magentaBright('     [')+white('-')+magentaBright(']')+white(` Failed to dm `)+ magentaBright(user.id))
                })
            } catch {

            }
            });
        });
    });

});
client.login(token).catch(err => {
    console.log(white('[+] ') + red("Incorrect token given ") + white('[+]'))
})
});
} catch {

}