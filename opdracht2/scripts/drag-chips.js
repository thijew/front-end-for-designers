
const chips = document.querySelector('.chips')

const chipStack = document.querySelector('.chipStack')



new Sortable(chips, {
    group: {
        name: 'shared',
        pull: 'clone', // To clone: set pull to 'clone'
        sort: 'false',
        swap: 'false',
    },
    animation: 100
});

new Sortable(chipStack, {
    group: {
        name: 'shared',
        pull: 'clone',
    },
    animation: 100
});

