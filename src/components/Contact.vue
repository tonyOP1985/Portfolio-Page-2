<template>
<div class="contact">
  <div class="title">
    <div class="title-main">
      <h1>Contact</h1>
    </div>
  </div>
   <div class="msg">
      <p>{{ msg }}</p>
    </div>
  <div class="form-area">
    <form @submit.prevent="onSubmit" method="POST">
      <div class="form-group">
        <input type="text"
               name="name"
               v-model="name"
               required>
        <span class="bar"></span>
        <label for="name">Name</label>
      </div>
      <div class="form-group">
        <input type="email"
               name="email"
               v-model="email"
               required>
        <span class="bar"></span>
        <label for="email">Email address</label>
      </div>
      <div class="form-group">
        <input type="tel"
               name="phone"
               v-model="phone"
               required>
        <span class="bar"></span>
        <label for="phone">Phone number</label>
      </div>
      <div class="form-group gotcha">
        <input type="text"
               name="gotcha"
               v-model="gotcha">
        <span class="bar"></span>
        <label for="gotcha">Leave blank if you're human</label>
      </div>
      <div class="form-group">
        <textarea name="message"
                  id="msg"
                  cols="30"
                  rows="5"
                  v-model="messageBody"
                  required></textarea>
        <span class="bar"></span>
        <label for="messsage">Message</label>
      </div>
      <button type="submit">SEND</button>
    </form>
  </div>
</div>

</template>

<script>
import axios from 'axios'
/* eslint-disable */
export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      gotcha: '',
      messageBody: '',
      form: {
        name: '',
        email: '',
        phone: '',
        gotcha: '',
        messageBody: ''
      },
      msg: ''
    }
  },
  methods: {
    onSubmit () {
      this.form.name = this.name
      this.form.email = this.email
      this.form.phone = this.phone
      this.form.gotcha = this.gotcha
      this.form.messageBody = this.messageBody
      axios
        .post("https://www.toliverpaull.com/", this.form)
        .then(response => {
          this.msg = response.data
          setTimeout(() => {
            this.msg = ''
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          this.msg = `This is embarassing. It appears something has gone wrong. :(
                      Due to the error you can also contact me at toliverpaull@gmail.com.`
        });
      this.onReset()
    },
    onReset () {
      this.name = '',
      this.email = '',
      this.phone = '',
      this.gotcha = '',
      this.messageBody = ''
    }
  }
}
</script>

<style scoped>
.contact {
  width: 100%;
  min-height: 100%;
}

.title {
  /*background-color: #2098D1;*/
  /*background: linear-gradient(45deg, #FFC01C, #2098D1);*/
  background: linear-gradient(45deg, #ffbf30, #30c9e8);
  width: 100%;
  height: 300px;
  padding: 40px 0;
  margin-bottom: 86px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 2rem;
}

.title-main,
.title-sub {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.header {
  width: 100%;
  margin-bottom: 10px;
}

.header h1 {
  width: auto;
  border-bottom: 2px solid #30c9e8;
}

.form-area {
  width: 60%;
  margin: 30px auto 0;
  display: block;
  background: #fff;
  padding: 50px 10px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}

.msg {
  width: 100%;
  text-align: center;
}

form {
  width: 90%;
}

.form-group {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 1rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
}

textarea {
  width: 100%;
  display: block;
  padding: 10px 10px 10px 5px;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/*active state*/

input:focus ~ label,
input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #02abd6;
}

/* bottom bars */

.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #02abd6;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active state */

input:focus ~ .bar:before,
input:focus ~ .bar:after,
textarea:focus ~ .bar:before,
textarea:focus ~ .bar:after {
  width: 50%;
}

.gotcha {
  display: none;
}

button {
  font-family: "Montserrat", sans-serif;
  padding: 10px 30px;
  border: none;
  background-color: #30c9e8;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #02abd6;
}

@media (max-width: 740px) {
  .title-main,
  .title-sub {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .title {
    height: 200px;
  }
}

@media (max-width: 500px) {
  .title-main h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 750px) {
  .form-area {
    width: 95%;
  }
}

input:-webkit-autofill {
  box-shadow: 0 0 0 50px #fff inset;
  -webkit-box-shadow: 0 0 0 50px #fff inset;
}
</style>
