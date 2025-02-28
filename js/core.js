document.body.addEventListener('click', e => {
	const sparkCount = 12 // Количество частиц
	for (let i = 0; i < sparkCount; i++) {
		const spark = document.createElement('div')
		spark.className = 'spark'
		document.body.appendChild(spark)

		// Устанавливаем положение и направление
		const angle = (i * 360) / sparkCount
		const dx = 50 * Math.cos((angle * Math.PI) / 180) // Смещение по X
		const dy = 50 * Math.sin((angle * Math.PI) / 180) // Смещение по Y
		spark.style.setProperty('--dx', `${dx}px`)
		spark.style.setProperty('--dy', `${dy}px`)

		// Устанавливаем начальные координаты частиц
		spark.style.left = `${e.pageX}px`
		spark.style.top = `${e.pageY}px`

		// Удаление частиц после завершения анимации
		spark.addEventListener('animationend', () => spark.remove())
	}
})

const btns = document.querySelectorAll('.menu-item')
const slider = document.querySelectorAll('.Block1')

var sliderNav = function (manual) {
	btns.forEach(btn => {
		btn.classList.remove('active')
	})

	slides.forEach(slide => {
		slide.classList.remove('active')
	})

	btns[manual].classList.add('active')
	slides[manual].classList.add('active')
}
