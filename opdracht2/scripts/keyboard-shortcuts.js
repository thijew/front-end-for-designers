
const chipsKey = document.querySelector('.chips')
const chipStackKey = document.querySelector('.chipStack')

const chip1 = chipStack.querySelector('.chip1')
const chip2 = chipStack.querySelector('.chip2')
const chip3 = chipStack.querySelector('.chip3')
const chip4 = chipStack.querySelector('.chip4')
const chip5 = chipStack.querySelector('.chip5')

// Hotkeys setup to add chips
hotkeys('1, 2, 3, 4, 5', function (handler) {
    const key = handler.key.toLowerCase()

    switch (key) {
        case '1':
            alert('Press')
            const num1 = document.createElement('li')
            num1.id = 'chip1'
            num1.innerHTML = '<button>1</button>'
            // num1.className = 'chip1'
            chipStack.appendChild(num1).className = 'chip1';
            break
        case '2':
            alert('Press')
            const num2 = document.createElement('li')

            num2.innerHTML = '<button>5</button>'
            chipStack.appendChild(num2)
            break
        case '3':
            alert('Press')
            const num3 = document.createElement('li')
            num3.innerHTML = '<button>10</button>'
            chipStack.appendChild(num3)
            break
        case '4':
            alert('Press')
            const num4 = document.createElement('li')
            num4.innerHTML = '<button>20</button>'
            chipStack.appendChild(num4)
            break
        case '5':
            alert('Press')
            const num5 = document.createElement('li')
            num5.innerHTML = '<button>50</button>'
            chipStack.appendChild(num5)
            break

    
    }
});

hotkeys('-+1, -+2, -+3, -+4, -+5', function (handler) {
    const key = handler.key.toLowerCase()

    switch (key) {
        case '-+1':
            alert('Press -1')
            const min1 = document.createElement('li')
            min1.id = 'chip1'
            min1.innerHTML = '<button>1</button>'
            // num1.className = 'chip1'
            chipStack.appendChild(num1).className = 'chip1';
            break
        case '2':
            alert('Press')
            const num2 = document.createElement('li')

            num2.innerHTML = '<button>5</button>'
            chipStack.appendChild(num2)
            break
        case '3':
            alert('Press')
            const num3 = document.createElement('li')
            num3.innerHTML = '<button>10</button>'
            chipStack.appendChild(num3)
            break
        case '4':
            alert('Press')
            const num4 = document.createElement('li')
            num4.innerHTML = '<button>20</button>'
            chipStack.appendChild(num4)
            break
        case '5':
            alert('Press')
            const num5 = document.createElement('li')
            num5.innerHTML = '<button>50</button>'
            chipStack.appendChild(num5)
            break

    
    }
});