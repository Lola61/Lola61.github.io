// let ielts = document.querySelector('.ielts__wrap');
// let btn_ielts = document.querySelector('.ielts');

// btn_ielts.addEventListener('click', function() {
//     ielts.classList.toggle('exam-active');

// });


// let toefl = document.querySelector('.toefl__wrap');
// let btn_toefl = document.querySelector('.toefl');

// btn_toefl.addEventListener('click', function() {
//     toefl.classList.toggle('exam-active');
// });


// let ege = document.querySelector('.ege__wrap');
// let btn_ege = document.querySelector('.ege');

// btn_ege.addEventListener('click', function() {
//     ege.classList.toggle('exam-active');
// });
let exams = document.querySelectorAll('.exam')
let buttons = document.querySelectorAll('.goals__item')
let ielts = document.querySelector('.ielts__wrap');
let toefl = document.querySelector('.toefl__wrap');
let ege = document.querySelector('.ege__wrap');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let buttonDataType = buttons[i].getAttribute('data-type')

        exams.forEach((exam) => {
            if (buttonDataType === 'ielts') {
                ielts.classList.toggle('exam-active')
            }

            if (buttonDataType === 'toefl') {
                toefl.classList.toggle('exam-active')
                ielts.classList.remove('exam-active')

                if (ielts.hidden === false) {
                    ielts.hidden = true
                }
            }
            if (buttonDataType === 'ege') {
                ege.classList.toggle('exam-active')
                toefl.classList.remove('exam-active')
            }
        })


    })
}