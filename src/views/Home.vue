<template>
  <div class="home">
    <div class="main-container">
      <div class="wrapper">
        <!-- NAVIGATION -->
        <div class="nav">
          <!-- single button -->
          <div class="register">
            <button>Register</button>
          </div>
          <!-- single button -->
          <div class="sign-in">
            <button>Sign In</button>
          </div>
        </div>
        <!-- HEADER -->
        <div class="header">
          <h1>RANDOM HEX</h1>
          <p>Generates a random hex value!</p>
          <p>Create an account and log in to save your favorites!</p>
        </div>
        <!-- COLOR DISPLAY -->
        <div :style="{ background: activeColor }" class="color-display">
          <p>{{ displayedData }}</p>
        </div>
        <!-- BUTTONS -->
        <div class="buttons">
          <!-- single button -->
          <div @click="randomColor()" class="button">
            <button >Generate</button>
          </div>
          <!-- single button -->
          <div @click="addToList()" class="button">
            <button>List</button>
          </div>
          <!-- single button -->
          <div class="button">
            <button>Save</button>
          </div>
          <!-- single button -->
          <div @click="reset()" class="button">
            <button>Reset</button>
          </div>
        </div>
        <!-- COLOR LIST -->
        <div class="color-list">
          <h1>Your Color List:</h1>
          <div v-for="item in list" :key="item" class="list">
            <ul>
              <li>{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayedData: 'your hex will display here',
      activeColor: '',
      list: []
    }
  },
  methods: {
    randomColor() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16)
      if (randomColor.length === 6) {
        this.displayedData = '#' + randomColor
        this.activeColor = this.displayedData
      }
    },
    addToList() {
      this.list.push(this.displayedData)
    },
    reset() {
      this.displayedData = 'your hex will display here'
      this.activeColor = ''
      this.list = []
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html {
  height: 100vh;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: grey;
}

button {
  outline: none;
  font-size: 18px;
}

.main-container {
  background: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.4);
}

.wrapper {
  padding: 25px 50px;
}

// NAVIGATION
.nav {
  display: flex;
  .sign-in {
    margin-left: auto;
  }
}

// HEADER
.header {
  h1 {
    font-size: 45px;
    padding: 15px 0 10px 0;
  }
  p {
    font-size: 22px;
  }
}

// COLOR DISPLAY
.color-display {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  height: 300px;
  width: 300px;
  border: 1px solid black;
}

// BUTTONS
.buttons {
  display: flex;
  justify-content: center;
  button {
    margin: 0 10px;
    width: 80px;
  }
}

// COLOR LIST
.color-list {
  h1 {
    margin: 15px 0;
  }
  .list {
    ul {
      list-style: none;
    }
  }
}
</style>
