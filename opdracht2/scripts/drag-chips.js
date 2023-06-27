
const chips = document.querySelector('.chips')
const chipStack = document.querySelector('.chipStack')


const bottomChips = new Sortable(chips, {
    group: {
        name: 'shared',
        pull: 'clone', 
        sort: false

    },
    animation: 50
});

const middleStack = new Sortable(chipStack, {
    group: {
        name: 'shared',
        pull: 'true',
        sort: false
    },
    animation: 50

});
