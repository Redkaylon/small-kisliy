const coffeImg = document.querySelectorAll('.img-coffe')



// кнопки с меню
const categories = document.querySelector('.categories')
const arrayButton = []

for(let i = 0; i < categories.children.length; i += 1) {
    arrayButton.push(categories.children[i])
}
//////


// для смены описания под картинкой
const description = document.querySelectorAll('.description')
////

const zakaz = document.querySelectorAll('.zakaz')
const basket = document.getElementById('basket')



let coffeValue = 0
let teaValue = 0
let drinksValue = 0
let dessertValue = 0

let isPAddedOneIf = false
let isPAddedTwoIf = false
let isPAddedThreeIf = false
let isPAddedFourIf = false



let allP = []

for(let i = 0; i <= 3; i += 1) {
    const puk = document.createElement('p')
    allP.push(puk)
    allP[i].classList.add('disp-none')
}


for(let i = 0; i < coffeImg.length; i += 1) {

    let timeoutId;

    coffeImg[i].addEventListener('click', () => {
        coffeImg[i].style.opacity = '0.3';
        description[i].style.opacity = '1';
        zakaz[i].style.opacity = '1';

        const setTIME = 3000;

        timeoutId = setTimeout(() => {
            coffeImg[i].style.opacity = '1';
            description[i].style.opacity = '0';
            zakaz[i].style.opacity = '0';
        }, setTIME);

        zakaz[i].addEventListener('click', () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                coffeImg[i].style.opacity = '1';
                description[i].style.opacity = '0';
                zakaz[i].style.opacity = '0';
            }, setTIME);
        });
    });

  


    arrayButton[0].addEventListener('click', () => {
        coffeImg[i].style.transition = 2 + 's'

        description[i].style.opacity = '0'
        zakaz[i].style.opacity = '0'

        coffeImg[i].style.opacity = '0'
        coffeImg[i].style.marginLeft = 300 + 'px'
        

        setTimeout(() => {
            coffeImg[i].src = 'img/кофе.jpg'
            description[i].innerHTML = 'Уникальный кофе'

            coffeImg[i].style.opacity = '1'
            coffeImg[i].style.marginLeft = 0 + 'px'
        }, 2000);

        setTimeout(() => {
            coffeImg[i].style.transition = 0 + 's'
        }, 4000);
    })

    arrayButton[1].addEventListener('click', () => {
        coffeImg[i].style.transition = 2 + 's'

        description[i].style.opacity = '0'
        zakaz[i].style.opacity = '0'

        coffeImg[i].style.opacity = '0'
        coffeImg[i].style.marginLeft = 300 + 'px'


        coffeImg[i].alt = 'tea'

        setTimeout(() => {
            coffeImg[i].src = 'img/чай.jpg'
            description[i].innerHTML = 'Уникальный чай'

            coffeImg[i].style.opacity = '1'
            coffeImg[i].style.marginLeft = 0 + 'px'
        }, 2000);

        setTimeout(() => {
            coffeImg[i].style.transition = 0 + 's'
        }, 4000);
    })

    arrayButton[2].addEventListener('click', () => {
        coffeImg[i].style.transition = 2 + 's'

        description[i].style.opacity = '0'
        zakaz[i].style.opacity = '0'

        coffeImg[i].style.opacity = '0'
        coffeImg[i].style.marginLeft = 300 + 'px'

        coffeImg[i].alt = 'napitok'

        setTimeout(() => {
            coffeImg[i].src = 'img/напиток.jpg'
            description[i].innerHTML = 'Уникальный напиток'

            coffeImg[i].style.opacity = '1'
            coffeImg[i].style.marginLeft = 0 + 'px'
        }, 2000);

        setTimeout(() => {
            coffeImg[i].style.transition = 0 + 's'

        }, 4000);
    })

    arrayButton[3].addEventListener('click', () => {
        coffeImg[i].style.transition = 2 + 's'

        description[i].style.opacity = '0'
        zakaz[i].style.opacity = '0'

        coffeImg[i].style.opacity = '0'
        coffeImg[i].style.marginLeft = 300 + 'px'

        coffeImg[i].alt = 'desert'


        setTimeout(() => {
            coffeImg[i].src = 'img/десерт.jpg'
            description[i].innerHTML = 'Уникальный десерт'

            coffeImg[i].style.opacity = '1'
            coffeImg[i].style.marginLeft = 0 + 'px'
        }, 2000);

        setTimeout(() => {
            coffeImg[i].style.transition = 0 + 's'
        }, 4000);
    })




    zakaz[i].addEventListener('click', () => {
        const currentValue = parseInt(basket.textContent.match(/\((\d+)\)/)[1])

        const newValue = currentValue + 1
        basket.textContent = `Корзина (${newValue})`


        const inlineDisplay = document.querySelector('.inline-display')
        console.log(document.images[i].alt)
        
        
        if (coffeImg[i].alt === 'coffe') {
            coffeValue += 1

            if(!isPAddedOneIf) {
                allP[0].textContent = `уникальный кофе ${coffeValue}`
                inlineDisplay.append(allP[0])
                isPAddedOneIf = true
            } else {
                allP[0].textContent = `уникальный кофе ${coffeValue}`
            }
        }

        if (coffeImg[i].alt === 'tea') {
            teaValue += 1

            if(!isPAddedTwoIf) {
                allP[1].textContent = `уникальный чай ${teaValue}`
                inlineDisplay.append(allP[1])
                isPAddedTwoIf = true
            } else {
                allP[1].textContent = `уникальный чай ${teaValue}`
            }
        }

        if (coffeImg[i].alt === 'napitok') {
            drinksValue += 1

            if(!isPAddedThreeIf) {
                allP[2].textContent = `уникальный напиток ${drinksValue}`
                inlineDisplay.append(allP[2])
                isPAddedThreeIf = true
            } else {
                allP[2].textContent = `уникальный напиток ${drinksValue}`
            }
        }

        if (coffeImg[i].alt === 'desert') {
            dessertValue += 1

            if(!isPAddedFourIf) {
                allP[3].textContent = `уникальный десерт ${dessertValue}`
                inlineDisplay.append(allP[3])
                isPAddedFourIf = true
            } else {
                allP[3].textContent = `уникальный десерт ${dessertValue}`
            }
        }
    })
}



const mark = document.getElementsByClassName('check-mark')
mark[0].classList.add('disp-none')

basket.addEventListener('click', () => {
    mark[0].classList.toggle('disp-none')

    for(let i = 0; i < allP.length; i += 1) {
        allP[i].classList.toggle('disp-none')
    }
})



/// блокирование кнопок


for(let i = 0; i < arrayButton.length; i += 1) {

    arrayButton[i].addEventListener('click', () => {

        arrayButton.forEach((button) => {
            button.setAttribute('disabled', '');

            setTimeout(() => {
                button.removeAttribute('disabled');
            }, 4000);
        })

    })

}

















































