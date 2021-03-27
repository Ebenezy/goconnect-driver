<template>
    <div class="homepage-main">
        <div class="home-logo">
            <img src="../assets/images/goconnect-logo-white.svg" alt="goconnect">
        </div>
        <div class="homepage-content">
            <a href="https://goconnect.com.ng/business">
            <div class="home-content1">
                <img src="../assets/images/goconnect-icon.svg" alt="goconnect">
                <p>Business</p>
            </div>
            </a>
            <router-link to="home">
            <div class="home-content1">
                <img src="../assets/images/gocab-icon.svg" alt="goconnect">
                <p>Cabs</p>
            </div>
            </router-link>
        </div>
        <div class="mb-4"></div>
    </div>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
.homepage-main {
    background: #000000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
.home-logo {
    margin-top: 2rem;
}
.home-logo img {
    width: 200px;
}
.homepage-content {
    display: flex;
    justify-content: center;
}
.homepage-content a {
    text-decoration: none;
    color: #FFFFFF;
}
.homepage-content a:hover {
    text-decoration: none;
    color: #FFFFFF;
    animation-name: bounce-1;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
.home-content1 {
    margin: 1rem 2rem;
}
.home-content1 p {
    font-family: AvenirNext-DemiBold;
    font-size: 25px;
    color: #FFFFFF;
    margin-top: 0.5rem;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
    .home-logo img {
        width: 150px;
    }
    .homepage-content img {
        width: 125px;
    }
    .home-content1 {
        margin: 1rem;
    }
    .home-content1 p {
        font-size: 18px;
    }
}
</style>