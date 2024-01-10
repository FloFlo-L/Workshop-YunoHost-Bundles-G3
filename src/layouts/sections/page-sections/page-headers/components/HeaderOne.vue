<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

// image
const bgImage =
  "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
</script>
<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none"
    >
      <div class="container">
        <a class="navbar-brand text-white" href="javascript:;"
          >Material Design</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#"> Home </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">
                About Us
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">
                Contact Us
              </RouterLink>
            </li>
          </ul>

          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://twitter.com/CreativeTim"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white mx-2"
                href="https://www.facebook.com/CreativeTim"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://www.instagram.com/CreativeTimOfficial"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  </header>
</template>
