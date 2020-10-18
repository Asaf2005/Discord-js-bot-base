const fs = require("fs");

module.exports = (client) => {


    //event hand
    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(
          f => f.split(".").pop() === "js" || f.split(".").pop() === "ts"
        );
        if (jsfiles.length <= 0) return console.log("No events to load!");

        console.log(`Loading a total amount ${files.length} events!`);
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${i+1}: ${f} loaded!`)
        });
      });



    //command handler
    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(
          f => f.split(".").pop() === "js" || f.split(".").pop() === "ts"
        );
        if (jsfiles.length <= 0) {
          console.log("No commands to load!");
          return;
        }
        console.log(`[Commands]\tLoaded a total amount ${files.length} Commands`);
        jsfiles.forEach(f => {
          let props = require(`./commands/${f}`);
          props.fileName = f;
          client.commands.set(props.help.name, props);
          props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
          });
        });
      });
};