require('colors');

const showMenu = () => {
    console.clear();
    console.log(addGC('====================='));
    console.log(addGC('Seleccione una opciòn'));
    console.log(addGC('=====================\n'));
    console.log(addGC('1.')+` Create task`);
    console.log(addGC('2.')+` List task`);
    console.log(addGC('3.')+` List task completadas`);
    console.log(addGC('4.')+` List task pendientes`);
    console.log(addGC('5.')+` Complete task(s)`);
    console.log(addGC('6.')+` Deleted task`);
    console.log(addGC('0.')+` Exit`);

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question('Choose an option: ', (opt) => {
        readLine.close();
    } )
}

const puase = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question(`\nPresione ${addGC('ENTER')} para continuar\n`, (opt) => {
        readLine.close();
    } )
}

const addGC = (text) => text.green

module.exports = {
    showMenu,
    puase
}