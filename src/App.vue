<template>
  <div class="">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div>
        <nav>
            <div>
                <h1 class="font-bold p-4"><router-link to="/">Coffe Shop</router-link></h1>
            </div>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/">About</router-link>
                </li>
                <li>
                    <router-link to="/">Contact</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <div class="container">
        <a href="" class="btn btn-success">Test</a>
    </div>
    <main class="px-16 py-6">
        <div class="flex justify-end text-primary font-bold">
            <router-link to="/">Login</router-link>
            <router-link to="/" class="ml-2">Sign Up</router-link>
        </div>
        <header>
            <h2 class="text-gray-700 text-6xl">Receipes</h2>
            <h3 class="text-2xl">Receipes</h3>
        </header>
        <div>
            <h4 class="font-bold mt-12 pb-2">Lates Products</h4>
            <div>
                <img src="../src/assets/img_05.png" alt="Arabica Coffe">
                <div>
                    <span>Coffe Bean Show</span>
                    <span>Reciepes</span>
                </div>
            </div>
        </div>
    </main>
    <router-view/>
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
