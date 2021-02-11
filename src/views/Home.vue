<template>
  <div class="home">
    <Register v-if="showModal" @close="showModal = false"></Register>

    <div class="main-container">
      <main class="inner-container">
        <div :style="{ background: activeColor }" class="wrapper">
          <!-- HEADER -->
          <header class="header">
            <h1>RANDOM HEX</h1>
            <p>Generates a random hex value!</p>
            <!-- <p>Create an account and log in to save your favorites!</p> -->
          </header>
          <!-- COLOR DISPLAY -->
          <div class="color-display">
            <p>{{ displayedData }}</p>
          </div>
          <!-- BUTTONS -->
          <div class="buttons">
            <!-- single button -->
            <div @click="randomColor()" class="button">
              <button>Generate</button>
            </div>
            <div class="buttons">
              <!-- single button -->
            <div @click="reset()" class="button">
              <button>Reset</button>
            </div>
            </div>
              <!-- single button -->
            <div @click="addToList()" class="button">
              <button>List</button>
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
      </main>
    </div>
  </div>
</template>

<script>
import Register from "@/components/Register";

export default {
  data() {
    return {
      displayedData: "#5b7a8a",
      activeColor: "#5b7a8a",
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
        this.list.length < 5 &&
        this.displayedData != "#5b7a8a"
      ) {
        this.list.push(this.displayedData);
      } else if (this.list.length == 5) {
        this.displayWarning = "5 color max. More features coming soon!";
      }
    },
    // resets all values
    reset() {
      this.displayedData = "#5b7a8a";
      this.activeColor = "#5b7a8a";
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
    created() {
      this.displayedData = this.randomColor()
    }
  }
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
  // display: flex;
  // background: white;
  // height: 90vh;
  // width: 90vw;
  
}

.inner-container {
  // display: flex;
  // background: red;
  // height: 90vh;
  // width: 90vw;
  // text-align: center;
  // border-radius: 10px;
  // box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.4);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
  width: 90vw;
  background-color: white;
  padding: 25px 50px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.4);
}

// NAVIGATION
.nav {
  // display: flex;
  .log-in {
    // margin-left: auto;
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
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // margin: 20px auto;
  // height: 300px;
  // width: 300px;
  background: white;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 20px 0 20px 0;
  p {
    font-size: 30px;
  }
}

// BUTTONS
.buttons {
  display: flex;
  margin-bottom: 20px;
  button {
    margin: 0 10px;
    padding: 10px 15px;
    width: 100px;
    background-color: white;
    border: none;
    border-radius: 10px;
  }
}

// COLOR LIST
.color-list {
  h1 {
    // margin-top: 15px;
  }
  p {
    font-size: 20px;
    color: white;
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
        font-size: 25px;
        padding-left: 10px;
        text-decoration: none;
        color: black;
        cursor: pointer;
      }
      li {
        font-size: 18px;
        width: 100px;
        padding: 12px 12px;
        margin: 5px;
        border: 2px solid white;
        border-radius: 10px;
      }
    }
  }
}
</style>















// * {
//   padding: 0;
//   margin: 0;
// }

// html {
//   height: 100vh;
// }

// body {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   background: grey;
// }

// button {
//   outline: none;
//   font-size: 18px;
// }

// .main-container {
//   background: white;
//   max-width: 1290px;
//   text-align: center;
//   border-radius: 10px;
//   box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.4);
// }

// .wrapper {
//   padding: 25px 50px;
// }

// @media screen and (max-width: 550px) {
//   .wrapper {
//     padding: 20px 20px;
//   }
// }

// // NAVIGATION
// .nav {
//   display: flex;
//   .log-in {
//     margin-left: auto;
//   }
// }

// // HEADER
// .header {
//   h1 {
//     font-size: 45px;
//     padding: 15px 0 10px 0;
//   }
//   p {
//     font-size: 22px;
//   }
// }

// @media screen and (max-width: 550px) {
//   .header {
//     h1 {
//       font-size: 38px;
//     }
//     p {
//       font-size: 18px;
//     }
//   }
// }

// // COLOR DISPLAY
// .color-display {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 20px auto;
//   height: 300px;
//   width: 300px;
//   border: 1px solid black;
//   p {
//     font-size: 18px;
//   }
// }

// @media screen and (max-width: 550px) {
//   .color-display {
//     height: 280px;
//     width: 280px;
//   }
// }

// // BUTTONS
// .buttons {
//   display: flex;
//   justify-content: center;
//   button {
//     margin: 0 10px;
//     width: 80px;
//   }
// }

// @media screen and (max-width: 550px) {
//   .buttons {
//     button {
//       font-size: 15px;
//     }
//   }
// }

// // COLOR LIST
// .color-list {
//   h1 {
//     margin-top: 15px;
//   }
//   p {
//     color: red;
//     margin-bottom: 10px;
//   }
//   .list {
//     display: flex;
//     justify-content: center;
//     ul {
//       display: flex;
//       list-style: none;
//       a {
//         display: flex;
//         align-items: center;
//         padding-left: 10px;
//         text-decoration: none;
//         color: black;
//         cursor: pointer;
//       }
//       li {
//         font-size: 18px;
//         margin: 6px 0;
//         width: 150px;
//       }
//     }
//   }
// }
