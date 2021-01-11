<template>
  <div class="modal">
    <div class="modal-wrapper">
      <!-- MODAL -->
      <div class="modal-header">
        <h2>{{error}}</h2>
        <h1>RANDOM HEX</h1>
        <form>
          <!-- username -->
          <label for="username">Username:</label>
          <input v-model="username" type="text" name="username"> <br>
          <!-- email -->
          <label for="email">Email:</label>
          <input v-model="email" type="email" name="email"> <br>
          <!-- password -->
          <label for="password">Password:</label>
          <input v-model="password" type="password" name="password">
        </form>
        <button @click="register()">Register</button>
        <button @click="close()">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import {auth, usersCollection} from '@/api/firebase.js'
export default {
  data() {
    return {
        username: '',
        email: '',
        password: '',
        userId: '',
        error: ''
    }
  },
  methods: {
    async register() {
      try {
        const {user} = await auth.createUserWithEmailAndPassword(this.email, this.password)
        await usersCollection.doc(user.uid).set({
          username: this.username,
          email: this.email,
          password: this.password,
          userId: user.uid
        })
        this.close()
      } catch(err) {
        if (err) {
          this.error = err.message
        }
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  height: 700px;
  background: lightgrey;
  opacity: 0.95;
  border-radius: 10px;
  z-index: 2;
}

.modal-wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: lightgrey;
 
}

.modal-header {
  h1 {
    padding: 15px;
    font-size: 45px;
  }
  form {
    
    label {
      font-size: 23px;
    }
  }
  button {
    margin: 20px 0;
    outline: none;
    font-size: 25px;
  }
}
</style>