<template>
  <van-form class="login" ref="formref">
    <!--
		<van-form  ref="formref">
			<div class="logo">
				<img src="../img/logo.png">
			</div>
			<! -- name指的是组件的名字 -->
    <!--v-model指的是双向绑定-->
    <!--<van-field v-model="username" name="用户名" placeholder="请输入登录账号" :rules="[{ required: true, message: '请输入登录账号'},{trigger:'onBlur',message: '请输入登录账号'}]" />
			<van-field v-model="password" type="password"  name="密码" placeholder="请输入登陆密码" :rules="[{ required: true, message: '密码不可为空' },{validator,message: '密码字符长度不少于6位'}]" />
			<div class="submit-buttom">
				<! -- display：block（块级元素 ） 会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父级宽度 -->
    <!--<van-button @click="asdf">立即登录</van-button>

			</div>

		</van-form>-->

    <van-field
      v-model="password"
      type="password"
      name="password"
      placeholder="请输入登陆密码"
      :rules="[
        { required: true, message: '密码不可为空' },
        { validator: validator1, message: '密码字符长度不少于6位' },
      ]"
    />
    <van-button @click="hhhhh">立即登录</van-button>
  </van-form>
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
    //			asdf(){
    //				console.log("l23")
    //				this.$refs.formref.validate();
    //			},

    hhhhh() {
      this.$refs.formref.validate("password");
    },
    //			validator(val) {
    //				return /^[0-9A-Za-z]{6,}$/.test(val);
    //			},
    validator1(val) {
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