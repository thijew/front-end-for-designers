

const chips = document.querySelector('.chips')

const chipStack = document.querySelector('.chipStack')


new Sortable(chips, {
    group: {
        name: 'shared',
        pull: 'clone', // To clone: set pull to 'clone'

    },
    animation: 50
});

new Sortable(chipStack, {
    group: {
        name: 'shared',
        pull: 'clone',
    },
    animation: 50

});

// hotkeys

// hotkeys(['1', '2', '3', '4', '5'] function (chipStack){
//     // Prevent the default refresh event under WINDOWS system
//     if (hotkeys.1) {
//         console.log('1');
//     }
//   });

hotkeys ('*', function() {
    if (hotkeys.num) {
        alert('you pressed a!')
    }
  })