const mapActions = {
    create: {
        alias: 'c', 
        description: 'create project', 
        examples: [ 
            'frytz create <project-name>'
        ]
    },
    '*': {
        alias: '', 
        description: 'command not found', 
        examples: [] 
    }
}
module.exports = {
    mapActions
};
