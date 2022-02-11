export class setDataFromInputs {

    constructor(payload) {

        const { form, tagName, formFields, validateFields, disableBtn } = payload

        this.form = form || ''
        this.tagName = tagName || ''
        this.formFields = formFields || {}
        this.validateFields = validateFields || {}
        this.button = disableBtn || false
        this.setInput = []
        this.selectTag = ''
        this.inputText = ''
        this.selectinput = ''
        this.selectBtn = null
        this.text = ''
        this.checkLengthParams = {}
        this.type = null
        this.formValueKey = null
        this.setInputCheckValue = null
        this.getInputs()
    }

    // Получаем все input и textarea относящиеся к форме которую мы передаем в классе. Записываем все общий массив setInput для переиспользования глобально

    getInputs() {
        const getInputs = document.querySelectorAll(`.${this.form} > input`)
        const getTextarea = document.querySelectorAll(`.${this.form} > textarea`)
        const getSelect = document.querySelectorAll(`.${this.form} > select`)
        this.selectBtn = document.querySelector(`.${this.form} > button`)
        if (this.button) { this.selectBtn.setAttribute('disabled', 'disabled') }
        this.setInput = [...this.setInput, ...getTextarea, ...getInputs, ...getSelect]
        this.listenerInputs()
        this.listenerButton()
    }

    // Слушаем кнопку для, предотвращаем отпувку форму если не заполненные все поля

    listenerButton () {
        this.selectBtn.addEventListener('click', () => this.checkFormValues())
        this.selectBtn.removeEventListener('click', () => this.checkFormValues())
    }

    // При нажатию на кнопку проверяем все ли поля заполненны

    checkFormValues () {
        for (const key in this.formFields) {
            this.formValueKey = key
            this.checkFormValuesType()
        }
    }

    // Проверяем поля на типы

    checkFormValuesType() {
        if (this.validateFields[this.formValueKey] !== undefined) {
            const { required, text, classTextError, inputForErrorText } = this.validateFields[this.formValueKey]
            this.addParamsValidateInput({ text, inputForErrorText, classTextError })
            const checkBoxLabel = document.querySelector(`.${this.classCheckBox}`)
            if (required && typeof this.formFields[this.formValueKey] === 'string' && this.formFields[this.formValueKey] === '') {
                this.setInputCheckValue = checkBoxLabel
                this.checkFormAddErrorLayout()
            } else if (required && typeof this.formFields[this.formValueKey] === 'boolean' && !this.formFields[this.formValueKey]) {
                this.setInputCheckValue = checkBoxLabel
                this.checkFormAddErrorLayout()
            } else if (required && Array.isArray(this.formFields[this.formValueKey]) && typeof this.formFields[this.formValueKey] === 'object' && this.formFields[this.formValueKey].length === 0) {
                this.setInputCheckValue = checkBoxLabel
                this.checkFormAddErrorLayout()
            }
        }
    }

    // Отправляем ошибку в верстку

    checkFormAddErrorLayout() {
        if (!this.setInputCheckValue?.nextSibling?.classList?.contains(`inputError`)) {
            let span = document.createElement('span')
            span.style.display = 'block'
            span.classList.add(`inputError`)
            span.classList.add(this.classTextError)
            span.innerHTML = this.text === undefined ? '*Поле не должно быть пустым' : this.text
            this.setInputCheckValue.insertAdjacentElement('afterEnd', span)
            if (this.button) { this.selectBtn.setAttribute('disabled', 'disabled') }
        } else {
            return
        }
    }

    // Слушаем все input относящиеся к форме и чистим

    listenerInputs() {
        this.setInput.forEach((input) => {
            input.addEventListener('input', (e) => this.setInputsForms(e))
            input.removeEventListener('input', (e) => this.setInputsForms(e))
        })
    }

    // Записываем в форму все получаемые данные c input

    setInputsForms (e) {
        const getAttribute = e.target.getAttribute(`${this.tagName}`)
        // Записываем глобально данные активного input
        this.selectTag = getAttribute
        this.selectinput = e.target
        this.inputText = e.target.value
        if (this.validateFields[this.selectTag] !== undefined) {
            const { minLength, maxLength, text, classTextError, inputForErrorText, type, checkLength } = this.validateFields[this.selectTag]
            this.addParamsValidateInput(
                { minLength, maxLength, text, classTextError, inputForErrorText, type, checkLength })
        }
        // Если тип input равен checkbox, то мы запускаем другую запись
        if (e.target.type === 'checkbox') {
            // Если тип поля формы равен boolean , то мы перезаписываем данные этой формы на true или false
            if (typeof this.formFields[this.selectTag] === 'boolean') {
                this.formFields[this.selectTag] = !this.formFields[this.selectTag] ? this.formFields[this.selectTag] = true : this.formFields[this.selectTag] = false
                this.checkedInputRequired()
                return
            } else {
                this.pushElementsInMassive(e)
            }
            //    Если данные input поступает строкой, то мы записываем в обычном виде
        } else if (e.target.type === 'select-multiple') {
            this.pushElementsInMassive(e)
        } else {
            this.formFields[this.selectTag] = this.inputText
            if (this.type !== 'email' && this.type !== 'select') {
                //    Запускаем валидацию на длину input
                this.validateLengthInput()
                return
            } else {
                //    Запускаем валидацию на тип input
                this.validateTypeInput()
                return
            }
        }
    }

    // Работаем с входящими данными которые пушатся в массив

    pushElementsInMassive(e) {
        // Если в форме поля массива присуствует значения поступающее с input, то мы удаляем это значение
        if (this.formFields[this.selectTag].includes(e.target.value)) {
            this.formFields[this.selectTag] = this.formFields[this.selectTag].filter( function(payload) { return payload !== e.target.value } )
            this.checkedInputRequired()
        } else {
            // Иначе записываем в массив
            this.formFields[this.selectTag] = [...this.formFields[this.selectTag], this.inputText]
            this.checkedInputRequired()
        }
    }

    // Проверка input на заданную длину

    validateLengthInput() {
        const { min, max, textLength } = this.checkLengthParams
        if (this.validateFields[this.selectTag] !== undefined) {
            const { text } = this.validateFields[this.selectTag]
            if (this.formFields[this.selectTag].length <= 0) {
                this.text = text
                this.mainAddErrorLayout()
            } else if (this.inputText?.trim()?.length <= min) {
                this.text = textLength
                this.mainAddErrorLayout()
            } else if (this.inputText?.trim()?.length > max) {
                this.text = textLength
                // Если валидацию не проходим, то записываем в массив ошибок ошибку относяшиеся к этому ключу поля, передав значение текста
                this.mainAddErrorLayout()
            } else {
                // Если проходим проверку, то удаляем с DOM дерева созданную ошибку
                this.mainRemoveErrorLayout()
            }
        }
    }

    // Проверка input на тип поля

    validateTypeInput() {
        if (this.validateFields[this.selectTag] !== undefined) {
            const { text } = this.validateFields[this.selectTag]
            this.text = text
            if (this.type === 'email') {
                if (this.validEmail(this.form.email)) {
                    this.mainRemoveErrorLayout()
                } else {
                    this.mainAddErrorLayout()
                }
            }
        }
    }

    checkedInputRequired() {
        if (typeof this.formFields[this.selectTag] === 'boolean') {
            if (this.formFields[this.selectTag]) {
                this.mainRemoveErrorLayout()
            } else {
                this.mainAddErrorLayout()
            }
        } else if (Array.isArray(this.formFields[this.selectTag]) && typeof this.formFields[this.selectTag] === 'object') {
            if (this.formFields[this.selectTag].length > 0) {
                this.mainRemoveErrorLayout()
            } else {
                this.mainAddErrorLayout()
            }
        }
    }

    // Проверка input на email

    validEmail () {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.inputText);
    }


    // Общий класс для добавления ошибок

    mainAddErrorLayout () {
        // Выводим ошибку под input
        if (this.validateFields[this.selectTag] !== undefined) {
            this.validateFields[this.selectTag].required = true
            this.addErrorLayout()
            this.observeErrorLayout()
        }
    }

    // Общий классс для удаление ошибки

    mainRemoveErrorLayout () {
        if (this.validateFields[this.selectTag] !== undefined) {
            this.validateFields[this.selectTag].required = false
            this.removeErrorLayout()
            this.observeErrorLayout()
        }
    }

    // Удаляем класс с error

    removeErrorLayout() {
        const errorLayout = document.querySelector(`.${this.classCheckBox}`)
        if (errorLayout !== null) {
            if (errorLayout.nextSibling?.classList?.contains('inputError')) {
                errorLayout?.nextSibling.remove()
            } else {
                return
            }
        }
    }

    // Выводим ошибку под input

    addErrorLayout () {
        const checkBoxLabel = document.querySelector(`.${this.classCheckBox}`)
        if (this.selectinput.type === 'radio') {
            return
        } else if (checkBoxLabel?.nextElementSibling?.classList.contains(`inputError`)) {
            checkBoxLabel.nextElementSibling.innerText = this.text
            return
        } else {
            const checkBoxLabel = document.querySelector(`.${this.classCheckBox}`)
            if (checkBoxLabel !== null) {
                let span = document.createElement('span')
                span.style.display = 'block'
                span.classList.add(`inputError`)
                span.classList.add(this.classTextError)
                span.innerHTML = this.text
                checkBoxLabel.insertAdjacentElement('afterEnd', span)
            }
        }
    }

    // Добавляем глобально параметры validate

    addParamsValidateInput (payload) {
        const { text, classTextError, inputForErrorText, type, checkLength } = payload
        this.text = text
        this.classTextError = classTextError
        this.classCheckBox = inputForErrorText
        this.type = type
        if (checkLength !== undefined) {
            const { min, max, textLength } = checkLength
            this.checkLengthParams = {
                min, max, textLength
            }
        } else {
            this.checkLengthParams = {}
        }

    }


    // Слушатель на заполненности полей

    observeErrorLayout () {
        let trueKeyElement = []
        for (const key in this.validateFields) {
            if (this.validateFields[key] !== undefined && this.validateFields[key].required === true) {
                trueKeyElement = [...trueKeyElement, this.validateFields[key].required]
            } else {
                if (this.button) { this.selectBtn.setAttribute('disabled', 'disabled') }
            }
        }
        if (trueKeyElement.length === 0) {
            if (this.button) { this.selectBtn.removeAttribute('disabled', 'disabled') }
            return true
        } else {
            return false
        }
    }

    // Получаем данные с заполненной формы

    get getListForm () {
        return this.formFields
    }
}
