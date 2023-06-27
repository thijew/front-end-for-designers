

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
            const num1 = document.createElement('li')
            num1.id = 'chip1'
            num1.innerHTML = '<button>1</button>'
            chipStack.appendChild(num1).className = 'chip1';
            break
        case '2':
            const num2 = document.createElement('li')
            num2.id = 'chip2'
            num2.innerHTML = '<button>5</button>'
            chipStack.appendChild(num2)
            break
        case '3':
            const num3 = document.createElement('li')
            num3.id = 'chip3'
            num3.innerHTML = '<button>10</button>'
            chipStack.appendChild(num3)
            break
        case '4':
            const num4 = document.createElement('li')
            num4.id = 'chip4'
            num4.innerHTML = '<button>20</button>'
            chipStack.appendChild(num4)
            break
        case '5':
            const num5 = document.createElement('li')
            num5.id = 'chip5'
            num5.innerHTML = '<button>50</button>'
            chipStack.appendChild(num5)
            break
    }
})

let deal = document.querySelector('.dealButton')

deal.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        console.log('pressed')
        e.preventDefault()
        dealButton.click()

    }
})


