<template>
  <div class="home">
    <Register v-if="showModal" @close="showModal = false"></Register>

    <div class="main-container">
      <div class="wrapper">
        <!-- NAVIGATION -->
        <!-- <div class="nav">
          <div class="register">
            <button @click="toggleModal()">Sign Up</button>
          </div>
          <div class="log-in">
            <button>Log In</button>
          </div>
        </div> -->
        <!-- HEADER -->
        <div class="header">
          <h1>RANDOM HEX</h1>
          <p>Generates a random hex value!</p>
          <!-- <p>Create an account and log in to save your favorites!</p> -->
        </div>
        <!-- COLOR DISPLAY -->
        <div :style="{ background: activeColor }" class="color-display">
          <p>{{ displayedData }}</p>
        </div>
        <!-- BUTTONS -->
        <div class="buttons">
          <!-- single button -->
          <div @click="randomColor()" class="button">
            <button>Generate</button>
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
          <p>{{ displayWarning }}</p>
          <div v-for="item in list" :key="item" class="list">
            <ul>
              <li :style="{ background: item }" :class="item">{{ item }}</li>
              <a @click="remove(item)">Remove</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "@/components/Register";

export default {
  data() {
    return {
      displayedData: "your hex will display here",
      activeColor: "",
      list: [],
      showModal: false,
      displayWarning: "",
    };
  },
  components: {
    Register,
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    // generates random hex and makes sure its .length === 6
    randomColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor.length === 6 && randomColor !== this.displayedData) {
        this.displayedData = "#" + randomColor;
        this.activeColor = this.displayedData;
      }
    },
    // checks to see if list contains and pushes to list
    addToList() {
      if (
        !this.list.includes(this.displayedData) &&
        this.list.length < 10 &&
        this.displayedData != "your hex will display here"
      ) {
        this.list.push(this.displayedData);
      } else if (this.list.length == 10) {
        this.displayWarning = "10 color max. More features coming soon!";
      }
    },
    // resets all values
    reset() {
      this.displayedData = "your hex will display here";
      this.activeColor = "";
      this.list = [];
      if (this.list.length < 10) {
        this.displayWarning = ""
      }
    },
    // removes a single item from the list
    remove(item) {
      let index = this.list.indexOf(item);
      this.list.splice(index, 1);
      if (this.list.length < 10) {
        this.displayWarning = ""
      }
    },
  },
};
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

@media screen and (max-width: 550px) {
  .wrapper {
    padding: 20px 20px;
  }
}

// NAVIGATION
.nav {
  display: flex;
  .log-in {
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

@media screen and (max-width: 550px) {
  .header {
    h1 {
      font-size: 38px;
    }
    p {
      font-size: 18px;
    }
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
  p {
    font-size: 18px;
  }
}

@media screen and (max-width: 550px) {
  .color-display {
    height: 280px;
    width: 280px;
  }
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

@media screen and (max-width: 550px) {
  .buttons {
    button {
      font-size: 15px;
    }
  }
}

// COLOR LIST
.color-list {
  h1 {
    margin-top: 15px;
  }
  p {
    color: red;
    margin-bottom: 10px;
  }
  .list {
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      list-style: none;
      a {
        display: flex;
        align-items: center;
        padding-left: 10px;
        text-decoration: none;
        color: black;
        cursor: pointer;
      }
      li {
        font-size: 18px;
        margin: 6px 0;
        width: 150px;
      }
    }
  }
}
</style>
