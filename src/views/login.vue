<template>
  <div class="login">
    <van-form ref="formref">
      <div class="logo">
        <img src="../img/logo.png" />
      </div>
      <!--name指的是组件的名字-->
      <!--v-model指的是双向绑定-->
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入登录账号"
        :rules="[{ required: true, message: '请输入登陆账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入登陆密码"
        :rules="[
          { required: true, message: '请输入登陆密码' },
          { validator: validator, message: '密码字符长度不少于6位' },
        ]"
      />
      <div class="submit-buttom">
        <!--display：block（块级元素 ） 会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父级宽度 -->
        <van-button block @click="login">立即登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login() {
      const params = new FormData();
      params.append("username", this.username);
      params.append("password", this.password);
      await this.$axios
        .post("/rest/tokens/login", params, {
          header: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          const res = response.data;
          if (res.ok != true) return this.$toast.fail("用户名与密码不一致！");
          this.$router.push("/index");
          localStorage.setItem("username", this.username);
        })
        .catch((error) => {
          console.log(Error);
        });
    },
    validator(val) {
      return /^[0-9A-Za-z]{6,}$/.test(val);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  text-align: center;
}

.van-field {
  width: 30rem;
  margin: 3rem 0;
}

.van-button {
  background-color: #d8211b;
  color: #ffffff;
  height: 3rem;
}

.van-field,
.van-button {
  border-radius: 0.3rem;
  border: solid 0.05rem #8b9cac;
  font-size: 1.5rem;
}
</style>