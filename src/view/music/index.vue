  <template>
  <div class="bg">
    <div class="banner">
      <img
        src="@/assets/music/3.png"
        alt=""
        style="height: 100%; width: 100%"
      />
    </div>
    <div class="right">
      <div class="item">白板</div>
      <div class="item">控制</div>
      <div class="item">返回</div>
      <div class="item">
        <i class="el-icon-rank"></i>
      </div>
    </div>
    <div class="contain-big">
      <div class="bigItem">
        <img src="@/assets/music/beat_8.png" alt="" width="80%" height="80%" />
      </div>
      <div :class="{ show: isShow, bigItem: !isShow }">
        <img src="@/assets/music/beat_4.png" alt="" width="80%" height="80%" style="z-index:10">
    </div>
      <div class="bigItem">
        <img src="@/assets/music/beat_1.png" alt="" width="80%" height="80%" />
      </div>
      <div class="bigItem"></div>
    </div>
    <div class="contain-small">
      <div class="smallItem">
        <img src="@/assets/music/beat_8.png" alt="" width="80%" height="80%" />
      </div>
      <div class="smallItem"></div>
      <div class="smallItem">
        <img src="@/assets/music/beat_1.png" alt="" width="80%" height="80%" />
      </div>
      <div class="smallItem"></div>
    </div>
    <div class="footer">
      <div class="begin">
        <button class="play" @click="playOrStop">
          <i class="el-icon-video-play"></i>
          播放
        </button>
      </div>
      <div class="footerItem">
        <img
          src="@/assets/music/activity_beat_circle_little.png"
          alt=""
          width="30px"
          height="30px"
        />
        <span>休息</span>
      </div>
      <div class="footerItem">
        <img
          src="@/assets/music/beat_1.png"
          alt=""
          width="30px"
          height="30px"
        />
        <span>拍手</span>
      </div>
      <div class="footerItem">
        <img
          src="@/assets/music/beat_8.png"
          alt=""
          width="30px"
          height="30px"
        />
        <span>同桌击掌</span>
      </div>
      .
    </div>
    <div class="category">目录</div>
    <div class="footer-right">
      <div class="end">结束放映</div>
      <div class="page">
        <div class="arrow" style="border-radius: 30px 0 0 30px">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="pageNum">1/12</div>
        <div class="arrow" style="border-radius: 0 30px 30px 0">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Music",
  data() {
    return {
      isPlay: false,
      isShow: false,
      timer: "",
      audio: new Audio(),
    };
  },
  methods: {
    async playOrStop() {
      await this.audio.play();
      this.isPlay = !this.isPlay;
      this.isShow = !this.isShow;
      if (this.isPlay) {
        // console.log("music");
        this.timer = setInterval(() => {
          this.isShow = !this.isShow;
        }, 1000);
      } else {
        // console.log("stop");
        clearInterval(this.timer);
        this.timer = "";
        this.isShow = false;
        this.isPlay = false;
        this.audio.pause();
      }
    },
  },
  created() {
    const url = require("@/assets/maka.mp3");
    this.audio.src = url;
    this.audio.addEventListener("ended", () => {
      clearInterval(this.timer);
      this.timer = "";
      this.isPlay = false;
      this.isShow = false;
    });
  },
};
</script>
  
  <style scoped>
.bg {
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -10;
  background: url("@/assets/music/activity_beat_bg.png") center center no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  /* cover */
}
.banner {
  position: fixed;
  top: -2px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 250px;
  height: 70px;
}
.right {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 80px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item {
  height: 24%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.el-icon-rank {
  font-size: 24px;
}
.footer {
  box-sizing: border-box;
  padding: 20px;
  position: fixed;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 700px;
  height: 80px;
  border-radius: 10px;
  background-color: #d5f0b1;
  border: white 1px solid;
  display: flex;
  align-items: center;
  gap: 50px;
}
.category {
  position: fixed;
  bottom: 10px;
  left: -15px;
  height: 30px;
  width: 90px;
  background-color: #fff;
  border: orange 2px solid;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  color: orange;
}
.footer-right {
  position: fixed;
  bottom: 10px;
  right: 15px;
  width: 270px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  color: white;
}
.end {
  width: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  text-align: center;
  line-height: 30px;
}
.page {
  width: 160px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 30px;
}
.arrow {
  width: 40px;
  background-color: rgba(0, 0, 0, 0.3);
}
.pageNum {
  width: 75px;
  background-color: rgba(0, 0, 0, 0.3);
}
.play {
  height: 40px;
  width: 80px;
  border-style: none;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  background: linear-gradient(to bottom, #f1bb5c, #fe7b33);
  color: white;
}

.footerItem {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.contain-big {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  height: 250px;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
}
.contain-small {
  width: 40%;
  height: 130px;
  position: absolute;
  bottom: 170px;
  left: 50%;
  transform: translate(-50%, 0);
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
}
.smallItem {
  height: 100%;
  width: 130px;
  background: url("@/assets/music/activity_beat_circle_little.png") center
    center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
}
.bigItem {
  height: 100%;
  width: 250px;
  background: url("@/assets/music/activity_beat_circle.png") center center
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
}
.show {
  height: 100%;
  width: 250px;
  background: url("@/assets/music/activity_beat_highlight.png") center center
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>