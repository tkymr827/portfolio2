<template>
  <div id="index">
    <main>
      <div class="top">
        <h1>Portfilio</h1>
        <div
          class="top__button"
          v-scroll-to="{ el: '.profile', duration: 1500 }"
        >
          Who's ME?
        </div>
      </div>
    </main>
    <div class="container">
      <nav>
        <ul>
          <li v-scroll-to="{ el: '.profile', duration: 1500 }">Profile</li>
          <li v-scroll-to="{ el: '.skill', duration: 1500 }">Skill</li>
          <li v-scroll-to="{ el: '.works', duration: 1500 }">Works</li>
          <li v-scroll-to="{ el: '.contact', duration: 1500 }">Contact</li>
        </ul>
        <div class="navlink">
          <a
            class="navgithub"
            href="https://github.com/tkymr827"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
          <a class="navtwitter" href="https://twitter.com/ijafiwpwa"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </div>
      </nav>
      <div class="content">
        <div class="profile">
          <h1 class="title"><font-awesome-icon icon="user" /> Profile</h1>
          <div class="profile__section">
            <div class="profile__section--thumbnail">
              <img src="../assets/IMG_0627.jpg" alt="profile" />
            </div>
            <div class="profile__section--text">
              <ul>
                <li>名前: Ryoya Takayama</li>
                <li>出身: 東京</li>
                <li>趣味: ゲーム(FPS,RTS)</li>
                <li>
                  リンク:
                  <a href="https://github.com/tkymr827" target="_blank"
                    ><font-awesome-icon :icon="['fab', 'github']" />Github</a
                  >
                  <a href="https://twitter.com/ijafiwpwa"
                    ><font-awesome-icon :icon="['fab', 'twitter']" />Twitter</a
                  >
                </li>
                <li>
                  今後してみたいこと：今勉強しているフロントエンドの言語をもっと深く理解し、自信を持って得意と言えるような言語を習得したい。
                  将来的にはAIの分野にも手を出してみたい。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="skill">
          <h1 class="title"><font-awesome-icon icon="broom" /> Skill</h1>
          <div class="skill__cards">
            <div class="htmlcss card">
              <div class="card--inner">
                <h2>HTML CSS Sass</h2>
                <p>
                  簡単なページ作成やレスポンシブデザインが可能。<br />Sassはネストを使ったコーディングか可能です。
                </p>
              </div>
            </div>
            <div class="javascript card">
              <div class="card--inner">
                <h2>Javascript</h2>
                <h3>フレームワーク:Vue.js</h3>
                <p>
                  生のJavascriptは勉強中。<br />VueはComponentsやVueRouter、Axiosなどの基礎的なコーディングが可能です。
                </p>
              </div>
            </div>
            <div class="php card">
              <div class="card--inner">
                <h2>PHP</h2>
                <h3>フレームワーク:Laravel</h3>
                <p>
                  簡単なWordPressのCMSが可能です。<br />LaravelはAPIの扱いやデータの受け渡し、Vueとの連携したコーディングが可能です。
                </p>
              </div>
            </div>
            <div class="python card">
              <div class="card--inner">
                <h2>Python</h2>
                <p>
                  基本的なコーディングとBeautifulSoupを使用したスクレイピングをしたことがあります。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="works">
          <h1 class="title"><font-awesome-icon icon="list-ul" /> Works</h1>
          <div class="works__list">
            <carousel
              :navigation-enabled="true"
              navigation-prev-label="<span style='font-size:30px'>◀︎</span>"
              navigation-next-label="<span style='font-size:30px'>▶︎</span>"
              paginationPosition="bottom-overlay"
              :speed="2000"
              :loop="true"
              :perPage="2"
            >
              <slide v-for="(slide, index) in slides" :key="index">
                <div class="slidecontent">
                  <!-- <p>test</p> -->
                  <img :src="slide.image" />
                  <h2>{{ slide.title }}</h2>
                  <p>{{ slide.text }}</p>
                  <span>製作期間:{{ slide.pp }}</span>
                  <div class="links">
                    <a class="make" :href="slide.link" target="_blank"
                      >リンク</a
                    >
                    <a
                      class="github"
                      :href="slide.github"
                      target="_blank"
                      v-if="slide.github"
                      >Github</a
                    >
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="contact">
          <h1 class="title">
            <font-awesome-icon icon="envelope" class="icon" /> Contact
          </h1>
          <h2>ご連絡はこちらまで</h2>
          <p>メールアドレス:takayamar827@gmail.com</p>
        </div>
      </div>
    </div>
    <footer>
      <nav>
        <ul>
          <li v-scroll-to="{ el: '.profile', duration: 1500 }">Profile</li>
          <li v-scroll-to="{ el: '.skill', duration: 1500 }">Skill</li>
          <li v-scroll-to="{ el: '.works', duration: 1500 }">Works</li>
          <li v-scroll-to="{ el: '.contact', duration: 1500 }">Contact</li>
        </ul>
      </nav>
      <small>Copyright &copy; Ryoya Takayama. All Rights Reserved.</small>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Candal&display=swap");
@import url("https://fonts.googleapis.com/css?family=Basic&display=swap");
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// html {
//   font-size: 62.5%;
// }

#index {
  // display: flex;
  font-family: "Basic", sans-serif;

  background: #f9e4b7;

  //   background: red;
  main {
    .top {
      background: url("../assets/topimg2.jpg") center center / cover no-repeat;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &__button {
        cursor: pointer;
        background: #2f92ab;
        color: #fff;
        font-size: 2rem;
        padding: 1rem 2rem;
        margin: 4rem;
      }
      h1 {
        font-size: 12rem;
        color: #fff;
        letter-spacing: 0.7rem;
        @media screen and(max-width:480px) {
          font-size: 8rem;
        }
      }
    }
  }
  .container {
    display: flex;
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
    nav {
      font-family: "Candal", sans-serif;

      border-right: 0.5rem solid #fff;

      height: 100vh;
      width: 20%;
      top: 0;
      position: sticky;
      ul {
        li {
          list-style: none;
          font-size: 5rem;
          margin: 2rem;
          opacity: 0.6;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
      @media screen and (max-width: 480px) {
        display: none;
      }
      .navlink {
        text-align: center;
        a {
          text-decoration: none;
          font-size: 4rem;
          margin: 0 2rem;
        }
        .navgithub {
          color: #171515;
        }
        .navtwitter {
          color: #00acee;
        }
      }
    }
    .content {
      margin: 0 5rem;
      .title {
        margin: 4rem 0;
        display: inline-block;
        padding: 0.5rem 10rem;
        color: #fff;
        line-height: 2;
        background-color: #63b8cc;
        position: relative;
        letter-spacing: 0.4rem;
        font-size: 4rem;
        @media screen and (max-width: 480px) {
          font-size: 2rem;
        }
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          border-top: 2.4rem solid #f9e4b7;
          border-right: 2.4rem solid #2f92ab;
          box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
        }
        &:first-letter {
          font-size: 6rem;
        }
      }
      .profile,
      .skill,
      .works {
        text-align: center;
        height: 100vh;
        margin: 3rem 0;
        @media screen and (max-width: 480px) {
          height: 140vh;
        }
      }
      .contact {
        text-align: center;
        height: 40vh;
        margin: 3rem 0;
        @media screen and (max-width: 480px) {
          //   height: 150vh;
        }
      }
      .profile {
        &__section {
          display: flex;
          @media screen and(max-width:480px) {
            flex-direction: column;
            flex-wrap: wrap;
          }
          &--thumbnail {
            width: 50%;
            img {
              height: 25rem;
              width: 25rem;
              border-radius: 50%;
              object-fit: cover;
              transform: rotate(90deg);
              @media screen and (max-width: 480px) {
                transform: rotate(0deg);
              }
            }
          }
          &--text {
            width: 50%;
            @media screen and(max-width:480px) {
              width: 100%;
            }
            ul {
              li {
                margin-top: 2rem;
                text-align: left;
                font-size: 2rem;
                a {
                  margin: 1rem;
                }
              }
            }
          }
        }
      }
      .skill {
        font-family: "Oswald", sans-serif;
        &__cards {
          margin: 0;
          display: flex;
          justify-content: center;
          //   align-items: center;
          flex-wrap: wrap;

          .card {
            background: #feffe6;
            height: 20rem;
            width: 30rem;
            margin: 1rem;
            @media screen and (max-width: 480px) {
              height: 15rem;
              width: 20rem;
            }
            &--inner {
              margin: 2rem;
            }
            h2 {
              font-size: 3rem;
              @media screen and(max-width:480px) {
                font-size: 1.8rem;
              }
            }
            h3 {
              opacity: 0.8;
              font-size: 1.5rem;
              @media screen and(max-width:480px) {
                font-size: 1rem;
              }
            }
            p {
              margin-top: 2rem;
              font-size: 1.3rem;
              text-align: left;
              @media screen and(max-width:480px) {
                margin-top: 1rem;
                font-size: 0.9rem;
              }
            }
          }
        }
      }
      .works {
        &__list {
          //   width: 80%;
          .VueCarousel {
            .VueCarousel-wrapper {
              .VueCarousel-inner {
                .VueCarousel-slide {
                  background: #feffe6;
                  //   margin-right: 0.2rem;
                  //   height: 60rem;
                  height: 75vh;
                  .slidecontent {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    white-space: pre-line;
                    img {
                      margin: 2rem;
                      // height: 20rem;
                      // width: 20rem;
                      width: 80%;
                      height: 80%;
                      object-fit: cover;
                    }
                    h2,
                    p {
                      margin: 1rem 0;
                    }
                    h2 {
                      font-family: "Oswald", sans-serif;
                      font-size: 3rem;
                      @media screen {
                        font-size: 2rem;
                      }
                    }

                    p,
                    span,
                    .links {
                      font-family: "Basic", sans-serif;
                    }
                    p {
                      font-size: 1.4rem;
                    }
                    span {
                      font-size: 1.4rem;
                    }
                    .links {
                      margin-top: 2rem;
                      @media screen and(max-width:480px) {
                        display: flex;
                        flex-direction: column;
                      }
                      a {
                        margin: 0 3rem;
                        text-decoration: none;
                        font-size: 1.5rem;
                        @media screen and(max-width:480px) {
                          margin: 1rem 3rem;
                        }
                      }
                      .make {
                        color: rgb(94, 236, 94);
                        border: 0.1rem solid rgb(94, 236, 94);
                        padding: 0.8rem 1.3rem;
                        &:hover {
                          color: #fff;
                          background: rgb(94, 236, 94);
                        }
                      }
                      .github {
                        color: #171515;
                        border: 0.1rem solid #171515;
                        padding: 0.8rem 1.3rem;
                        &:hover {
                          color: #fff;
                          background: #171515;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .contact {
        h2 {
          font-size: 2rem;
        }
        p {
          font-size: 1.7rem;
          @media screen and(max-width:480px) {
            // font-size: 1.8rem;
          }
        }
      }
    }
  }
  footer {
    background: #2e2e2e;
    height: 15rem;
    display: flex;
    // justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    nav {
      width: 40%;
      margin: 2rem 0;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          cursor: pointer;
          list-style: none;
          color: #fff;
          font-size: 2rem;
          opacity: 0.7;
          &:hover {
            border-bottom: 0.1rem solid #fff;
            margin-bottom: -0.1rem;
            opacity: 1;
          }
          @media screen and (max-width: 480px) {
            margin: 0 2rem;
          }
        }
      }
    }
    small {
      color: #fff;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: require("../assets/relaxsounds.png"),
          title: "Relax Sounds",
          text:
            "項目をクリックするとBGMが流れるサイトです。\n初めてVueを使用し、ディテクレィブなどの基本的な使い方の勉強になりました。",
          pp: "３日ほど",
          link: "https://tkymr827.github.io/relax-sounds/",
          github: "https://github.com/tkymr827/relax-sounds"
        },
        {
          image: require("../assets/weathernow.png"),
          title: "Weather Now",
          text:
            "各地の天気を見ることができます。\nSPAを使ったページの作成とaxiosを使ってAPIの取得の勉強になりました。\n",
          pp: "５日ほど",
          link: "https://tkymr827.github.io/weathernow/#/",
          github: "https://github.com/tkymr827/weathernow"
        },
        {
          image: require("../assets/numgame.png"),
          title: "Number Game",
          text:
            "1から9までのランダムに配置された数字を早くクリックしていくゲームです。\naxiosを使いGoogle Firebaseのサーバーとやり取りしランキング機能もつけました。",
          pp: "５日ほど",
          link: "https://tkymr827.github.io/num-game/",
          github: "https://github.com/tkymr827/num-game"
        },
        {
          image: require("../assets/untilgraduation.png"),
          title: "Until Graduation",
          text:
            "学校卒業までのカウントダウンです。\n頼まれたので作ってみました。",
          pp: "３時間ほど",
          link: "https://tkymr827.github.io/until-graduation/",
          github: "https://github.com/tkymr827/until-graduation"
        },
        {
          image: require("../assets/traindelaystatus.png"),
          title: "Train Delay Status",
          text:
            "Yahoo遅延情報のページをPHPでスクレイピングして表示させるサイトです。\n初めてLaravelを使用しControllerからのデータの受け渡しの勉強になりました。",
          pp: "１週間ほど",
          link: "https://quiet-lake-70522.herokuapp.com/"
        },
        {
          image: require("../assets/searchfortwitterpicture.png"),
          title: "Search for Twitter Picture",
          text:
            "Twitterの画像検索ができるサイトです。\nLaravelでTWitterAPIを使用し画像を取得、取得した画像をVueに渡して表示する弁ょうになりました。",
          pp: "１週間ほど",
          link: "https://guarded-castle-18622.herokuapp.com/"
        }
      ]
    };
  }
};
</script>
