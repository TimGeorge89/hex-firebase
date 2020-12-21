<template>
  <div class="modal">
    <div class="modal-wrapper">
      <!-- MODAL -->
      <div class="modal-header">
        <h1>RANDOM HEX</h1>
        <form>
          <!-- username -->
          <label for="username">Username:</label>
          <input type="text" name="username"> <br>
          <!-- password -->
          <label for="password">Password:</label>
          <input type="text" name="password">
        </form>
        <button>Register</button>
      </div>
    </div>
  </div>
</template>

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