

const fs = require('fs')
fs.writeFileSync('notes.txt','hello')
console.log(fs.readFileSync('notes.txt').toString())

//azwd 7aga 3ala nfs el file

fs.appendFileSync('notes.txt','helloo adam')

//append

/////////////////////

// 2) import your own file
const x = require ('./data')
console.log(x.name)
console.log(x.sum)

////////////////////////////////////////

// 3)import package module

const validator = require('validator')
console.log(validator.isEmail('lolo@gmail.com'))

const chalk = require('chalk');
console.log(chalk.green.bold('success')+'  '+chalk.magenta.bgWhiteBright('success'));
console.log(chalk.red.bold('error')+'  '+chalk.cyanBright('error'));
console.log(chalk.blue.bold(x.name));

//////////////////////////////////////////////

//console.log(process.argv)
/*
if(process.argv[2]== 'add'){
    console.log('true')
}
else if (process.argv[2]== 'delete'){
    console.log('false')
}
else{
    console.log('unknown')
}
*/

const yargs = require ('yargs')
//console.log(yargs.argv)
/* ///step1
yargs.command({
    command:'add',
    describe:'Add note',
    handler: function(){    ///function 3shan anfz el 7aga ely gwaha 3ala asas el command
        console.log('note has been added')
    }

})

yargs.command({
    command:'delete',
    describe:'delete note',
    handler: function(){    
        console.log('note has been deleted')
    }
})
yargs.command({
    command:'read',
    describe:'read note',
    handler: function(){    
        console.log('note has been read')
    }
})
yargs.command({
    command:'list',
    describe:'list note',
    handler: function(){    
        console.log('note has been listed')
    }
})
*/

//step 2

yargs.command({
    command:'add',
    describe:'Add note',
    builder:{
        title:{
            describe:'title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){    
        console.log('title is',argv.title)
        console.log('body is',argv.body)
        
     //   console.log('note has been added')
    }
})

yargs.command({
    command:'delete',
    describe:'delete note',
    builder:{
        title:{
            describe:'title of the note',
           // demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){    
        console.log('title is',argv.title)
        console.log('body is',argv.body)
        
     //   console.log('note has been deleted')
    }
})
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'title of the note',
           // demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){    
         console.log('title is',argv.title)
        // console.log('body is',argv.body)
        
       console.log('note has been read')
    }
})



console.log(yargs.argv)
yargs.parse()



