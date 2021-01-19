<template>
  <div class="index">
    <van-row type="flex">
      <van-col span="6">
        <img src="../img/logo.png" />
      </van-col>
    </van-row>
    <div class="menu">
      <div class="photos">
        <van-row>
          <van-col span="8" @click="inStock">
            <img src="../img/1-inStock.png" />
            <p>商品上架</p>
          </van-col>
          <van-col span="8" @click="moveStock">
            <img src="../img/2-moveStock.png" />
            <p>商品移库</p>
          </van-col>
          <van-col span="8" @click="pickStock">
            <img src="../img/3-pickStock.png" />
            <p>商品下架</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="8" @click="txt">
            <img src="../img/4-goodsSearch.png" />
            <p>商品查询</p>
          </van-col>
          <van-col span="8">
            <img src="../img/5-goodsList.png" />
            <p>商品盘点</p>
          </van-col>
          <van-col span="8">
            <img src="../img/6-exit.png" />
            <p>退出系统</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24" style="text-align: center">
            <img src="../img/diandian.png"
          /></van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    inStock() {
      this.$router.push("/inStock");
    },
    pickStock() {
      this.$router.push("/pickStock");
    },
    moveStock() {
      this.$router.push("/moveStock");
    },
    txt() {
      this.$router.push("/txt");
    },
  },
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
}

.van-col.van-col--6 {
  margin: 1rem;
}

.van-col.van-col--8 {
  text-align: center;
}

/deep/input.van-field__control {
  margin: 3px;
}

.menu {
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
}

.photos {
  width: 70%;
}
</style>