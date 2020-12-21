<template>
  <div class="modal">
    <div class="modal-wrapper">
      <!-- MODAL -->
      <div class="modal-header">
        <h1>RANDOM HEX</h1>
        <form>
          <!-- username -->
          <label for="email">Email:</label>
          <input v-model="email" type="email" name="email"> <br>
          <!-- password -->
          <label for="password">Password:</label>
          <input v-model="password" type="password" name="password">
        </form>
        <button @click="register()">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import {auth, usersCollection} from '@/api/firebase.js'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const {user} = await auth.createUserWithEmailAndPassword(this.email, this.password)
      await usersCollection.doc(user.uid).set({
        name: 'Tim',
        color: 'green',
      })
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
}

.show {
  
}

.modal-wrapper {
  position: relative;
  text-align: center;
  background: green;
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