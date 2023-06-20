const chips = document.querySelector('.chips')

const chipStack = document.querySelector('.chipStack')



new Sortable(chips, {
    group: {
        name: 'shared',
        pull: 'clone', // To clone: set pull to 'clone'
        put: 'false',
        sort: 'false'
    },
    animation: 300
});

new Sortable(chipStack, {
    group: {
        name: 'shared',
        pull: 'false'
    },
    animation: 300
});