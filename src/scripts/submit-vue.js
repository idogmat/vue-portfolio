import Vue from 'vue';
new Vue ({
    el:"#submit-me",
    data:{
        name:'',
        email:'',
        message:'',
        nameValid:true,
        emailValid:true,
        messageValid:true,
        nameError:'',
        emailError:'',
        messageError:'',
        overlayHidden:true,
        resultMessage:''
    },
    methods:{
        validateName() {
            this.name = this.$el.querySelector('.form-input-name').value;
            if (this.name.length < 3) {
                this.nameValid = false;
                this.nameError = 'Слишком короткое имя';
            } else {
                this.nameValid = true;
                this.nameError = true;
            }
            return this.nameValid;
        },
        validateEmail() {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.email = this.$el.querySelector('.form-input-email').value;
            if (this.email.length < 8) {
                this.emailValid = false;
                this.emailError = 'Короткий email';
            } else if (!regex.test(this.email)) {
                this.emailValid = false;
                this.emailError = 'Неверный email';
            } else {
                this.emailValid = true;
                this.emailError = '';
            }
            return this.emailValid;
        },
        validateMessege() {
            this.message = this.$el.querySelector('.form-input-message').value;
            if (this.message.length < 20) {
                this.messageValid = false;
                this.messageError = 'Слишком короткое сообщение';
            } else {
                this.messageValid = true;
                this.messageError = '';
            }
            return this.messageValid;
        },
        submitForm() {
            var nameValid = this.validateName(),
            emailValid = this.validateEmail(),
            messageValid = this.validateMessege();
            if (nameValid && emailValid && messageValid) {
                var userData = {
                    name: this.name,
                    to: this.email,
                    comment: this.message,
                    phone:"8800800800"
                }
                fetch('https://webdev-api.loftschool.com/sendmail', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userData)
                }).then((response) => {
                    if(response = 200) {
                    console.log(response);
                    this.resultMessage = "Сообщение отправлено!";
                    this.overlayHidden = false;
                    setTimeout(this.hideOverlay, 5000);
                    }else {
                    this.resultMessage = "Ошибка сервера";
                    this.overlayHidden = false;
                    setTimeout(this.hideOverlay, 5000);
                    }
                })
            }
        },
        hideOverlay() {
            this.overlayHidden = true;
        }
    }
});