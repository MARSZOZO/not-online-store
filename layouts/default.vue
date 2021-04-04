<template>
  <div>
    <div class="row header">
      <div class="col-12">
        <Navbar @openBasketPanel="openBasketPanel" />
      </div>
    </div>
    <div id="main" class="row">
      <div class="col-1">
        <Sidebar />
      </div>
      <div class="col-11">
        <Nuxt />
      </div>
    </div>
    <BasketSlide @closeBasketPanel="closeBasketPanel" />
  </div>
</template>

<script>
import Navbar from "@/components/templates/Navbar";
import Sidebar from "@/components/templates/Sidebar";
import BasketSlide from "@/components/BasketSlide";

export default {
  components: {
    Navbar,
    Sidebar,
    BasketSlide,
  },
  mounted() {
    this.redirectPath();
  },
  methods: {
    redirectPath() {
      this.$router.push("/catalog/backpack");
    },
    openBasketPanel() {
      document.getElementById("menu").classList.add("menu-open");
      document.getElementById("main").classList.add("milk-shadow");
    },
    closeBasketPanel() {
      document.getElementById("menu").classList.remove("menu-open");
      document.getElementById("main").classList.remove("milk-shadow");
    },
  },
};
</script>

<style>
/* header style */
.header {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  height: 66px;
}
.header-basket {
  float: right;
  position: relative;
  top: 11px;
  right: 108px;
  cursor: pointer;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  font-size: 100%;
}
* {
  font-family: "PT Sans", sans-serif;
  color: #1f1f1f;
  line-height: 1.5;
}
h1 {
  margin: 0;
  font-size: 32px;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.justify {
  text-align: justify;
}
.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.row {
  position: relative;
  width: 100%;
}
.row [class^="col"] {
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;
}
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  width: 96%;
}
.col-1-sm {
  width: 4.33%;
}
.col-2-sm {
  width: 12.66%;
}
.col-3-sm {
  width: 21%;
}
.col-4-sm {
  width: 29.33%;
}
.col-5-sm {
  width: 37.66%;
}
.col-6-sm {
  width: 46%;
}
.col-7-sm {
  width: 54.33%;
}
.col-8-sm {
  width: 62.66%;
}
.col-9-sm {
  width: 71%;
}
.col-10-sm {
  width: 79.33%;
}
.col-11-sm {
  width: 87.66%;
}
.col-12-sm {
  width: 96%;
}
.row::after {
  content: "";
  display: table;
  clear: both;
}
.hidden-sm {
  display: none;
}
@media only screen and (min-width: 33.75em) {
  /* 540px */
  .container {
    width: 80%;
  }
}
@media only screen and (min-width: 45em) {
  /* 720px */
  .col-1 {
    width: 4.33%;
  }
  .col-2 {
    width: 12.66%;
  }
  .col-3 {
    width: 21%;
  }
  .col-4 {
    width: 29.33%;
  }
  .col-5 {
    width: 37.66%;
  }
  .col-6 {
    width: 46%;
  }
  .col-7 {
    width: 54.33%;
  }
  .col-8 {
    width: 62.66%;
  }
  .col-9 {
    width: 71%;
  }
  .col-10 {
    width: 79.33%;
  }
  .col-11 {
    width: 87.66%;
  }
  .col-12 {
    width: 96%;
  }
  .hidden-sm {
    display: block;
  }
}
@media only screen and (min-width: 60em) {
  /* 960px */
  .container {
    width: 75%;
    max-width: 60rem;
  }
}
.hover-icon:hover {
  transition: 0.5s;
  filter: brightness(0);
  cursor: pointer;
}
.hover-icon {
  transition: 0.5s;
}
ul {
  padding-left: 0;
  margin: 0;
}
ul > li {
  list-style-type: none;
}
input {
  width: 100%;
  background: #f8f8f8;
  border-radius: 8px;
  height: 50px;
  text-indent: 20px;
  border-style: unset !important;
}
select {
  border: none;
  position: relative;
  outline: none;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 5%);
  text-align: start;
  height: 40px;
  font: 400 14px Arial;
  width: 160px;
  text-indent: 10px;
  border-radius: 33px;
  color: #59606d;
}
a {
  text-decoration: none;
}
:focus {
  outline: none !important;
}
.nuxt-link-exact-active,
.nuxt-link-active {
  text-decoration: underline;
  color: black !important;
}
.f-nowrap {
  white-space: nowrap;
}
.f-bold {
  font-weight: bold;
}
.w-15 {
  width: 15px;
}
.w-20 {
  width: 20px;
}
.pointer {
  cursor: pointer;
}
.position-absolute {
  position: absolute;
}
.box-shadow {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
}
.b-white {
  background: white;
}
.f-size-14 {
  font-size: 14px;
}
.f-size-18 {
  font-size: 18px;
}
.f-black {
  color: #1f1f1f;
}
.f-gray {
  color: #59606d;
}
.f-yellow {
  color: #f2c94c;
}
.pt-40 {
  padding-top: 40px;
}
.pb-15 {
  padding-bottom: 15px;
}
.btn-full-width {
  width: 100% !important;
  height: 50px !important;
  background: black !important;
  color: white !important;
  border-radius: 8px !important;
  font: 400 16px Arial !important;
  border-style: none !important;
  cursor: pointer !important;
  transition: 0.5s;
}
.btn-full-width:hover {
  transition: 0.5s;
  background: #59606d !important;
}
.milk-shadow {
  top: 0;
  right: 0;
  left: 0;
  height: 0;
  opacity: 0.4;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.img-tshirt {
  width: 200px;
}
.mt-30vh {
  margin-top: 30vh;
}
.mt-10 {
  margin-top: 10px;
}
.mt-20 {
  margin-top: 10px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-20 {
  margin-bottom: 20px;
}
</style>
