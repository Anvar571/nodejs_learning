const {execFile} = require("child_process");

execFile("some.sh", (err, stdout, stderr) => {
    if (err){
        console.log(`error ${err.message} `);
        return;
    };

    if (stderr) {
        console.log(`stderr ${stderr.message}`);
        return;
    };

    console.log(`OutPut ${stdout}`);
});
