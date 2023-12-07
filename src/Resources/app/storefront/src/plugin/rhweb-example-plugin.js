import Plugin from 'src/plugin-system/plugin.class';

export default class RhwebExamplePlugin extends Plugin {
    init(){
        this.customFunction();
    }

    customFunction(){
       console.log('Child-Theme | Check! :)')
    }
}
