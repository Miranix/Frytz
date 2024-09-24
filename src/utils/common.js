const mapActions = {
    create: {
        alias: 'c', 
        description: 'create project', 
        examples: [ 
            'lee-cli create <project-name>'
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
