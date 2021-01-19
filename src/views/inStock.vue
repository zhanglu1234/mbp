<template>
  <div class="inStock">
    <van-nav-bar title="商品上架" left-arrow @click-left="onClickLeft" />
    <van-row type="flex" justify="center">
      <van-col span="14">
        <van-row type="flex">
          <van-col span="24" class="col-border">
            <van-search
              v-model="value"
              placeholder="请扫描或录入待上架的货架号"
            />
          </van-col>
        </van-row>
        <van-row type="flex">
          <van-col span="24" class="col-border">
            <div class="input-info">
              <van-row type="flex">
                <van-col span="">
                  <van-cell title="上架储位：" />
                </van-col>
                <van-col class="col-border" span="15" readonly>
                  <van-cell
                    class="input-keynumber"
                    :value="keyNumber"
                    readonly
                    @touchstart.native.stop="show = true"
                  />
                </van-col>
              </van-row>
              <van-row type="flex">
                <van-col class="pallet-number">
                  <van-cell title="托盘号：" />
                </van-col>
                <van-col class="col-border" span="15">
                  <van-cell value="1011" />
                </van-col>
              </van-row>
            </div>
            <div class="file-form">
              <van-field label="商品名称：" placeholder="智利JJ车厘子10KG" />
              <van-field label="建议库位：" placeholder="1101" />
              <van-field label="批次号：" placeholder="202009200001" />
              <van-field label="托盘号：" placeholder="100 件" />
              <van-field
                class="file-form-bottom"
                label="重  量："
                placeholder="800.55KG"
              />
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <div class="submit-inStock" @click="onSubmit">
              <van-button round block native-type="submit">确定上架</van-button>
            </div>
          </van-col>
        </van-row>
      </van-col>
      <van-col>
        <van-number-keyboard
          :transition="false"
          v-model="keyNumber"
          :show="show"
          :maxlength="6"
          theme="custom"
          @blur="show = false"
          close-button-text="完成"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      keyNumber: "",
      wmToUpGoodsstr: {
        orderIdI: '"4028b8817433f2df01743330003"',
        createBy: '"admin"',
        goodsProData: '"2020-08-27"',
        binId: '"A32323"',
        orderId: '"RK20200828-0001"',
        goodsId: '"1003"',
        wmToUpId: '"4028b8817433f2df017433f5045c0006"',
        goodsQua: '"190"',
        goodsUnit: '"箱"',
        kuWeiBianMa: '"03-07-1"',
        cusCode: '"customer2"',
        id: '"bcb568fd645c4e2e869fce7734f477cd"',
      },
      value: "",
    };
  },
  methods: {
    async onSubmit() {
      const params = new FormData();
      params.append(
        "wmToUpGoodsstr",
        "{" +
          '"orderIdI"' +
          ":" +
          this.wmToUpGoodsstr.orderIdI +
          "," +
          '"createBy"' +
          ":" +
          this.wmToUpGoodsstr.createBy +
          "," +
          '"goodsProData"' +
          ":" +
          this.wmToUpGoodsstr.goodsProData +
          "," +
          '"binId"' +
          ":" +
          this.wmToUpGoodsstr.binId +
          "," +
          '"orderId"' +
          ":" +
          this.wmToUpGoodsstr.orderId +
          "," +
          '"goodsId"' +
          ":" +
          this.wmToUpGoodsstr.goodsId +
          "," +
          '"wmToUpId"' +
          ":" +
          this.wmToUpGoodsstr.wmToUpId +
          "," +
          '"goodsQua"' +
          ":" +
          this.wmToUpGoodsstr.goodsQua +
          "," +
          '"goodsUnit"' +
          ":" +
          this.wmToUpGoodsstr.goodsUnit +
          "," +
          '"kuWeiBianMa"' +
          ":" +
          this.wmToUpGoodsstr.kuWeiBianMa +
          "," +
          '"cusCode"' +
          ":" +
          this.wmToUpGoodsstr.cusCode +
          "," +
          '"id"' +
          ":" +
          this.wmToUpGoodsstr.id +
          "}"
      );
      await this.$axios
        .post("/rest/wmToUpGoodsController", params, {
          header: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          const res = response.data;
          if (res.ok != true) return console.log(res);
        })
        .catch((Error) => {
          console.log(Error);
        });
    },
    onClickLeft() {
      this.$router.push("/index");
    },
  },
};
</script>

<style lang="less" scoped>
/*搜索符*/

/deep/ i.van-icon.van-icon-search {
  font-size: 1.25rem;
}

.input-keynumber {
  height: 55%;
}
/*搜索栏的背景颜色*/

/deep/ .van-search__content.van-search__content--square {
  background-color: #ffff;
}

.pallet-number {
  width: 9.25rem;
}
/*键盘输入边框*/

.col-border {
  border: solid 0.05rem;
  border-radius: 0.3rem;
  text-align: left;
}

.van-number-keyboard {
  position: static;
  padding-bottom: 0;
  margin: 35.5% 0;
}
/*键盘内边距*/

/deep/.van-key {
  padding: 0.15rem;
  font-size: 2rem;
}
/*键盘颜色*/

/deep/.van-key--blue {
  color: #333333;
  background-color: #ffffff;
}
/*商品界面添加边框*/

.van-col.van-col--14 {
  margin: 0 0.5rem;
  border-radius: 0.3rem;
  color: #dedededf;
}
/*键盘输入以及商品展示信息字体*/

.input-info .van-cell {
  font-size: 1.25rem;
  width: 80%;
  padding: 0.5rem;
}
/*file-form 到底边的距离*/

.file-form {
  margin: 0 0 5rem 0;
}

.file-form .van-field {
  font-size: 1.25rem;
  width: 80%;
  padding: 0.1rem;
}

/deep/ .van-field__label {
  color: black;
}
/*商品提交字体与间距*/

.submit-inStock .van-button {
  font-size: 1.28rem;
  width: 100%;
  padding: 0.5rem;
  height: 3.5rem;
  background-color: #d8211b;
  color: #ffffff;
}
/*field_control 所有字体居中*/

/deep/ input.van-field__control {
  font-size: 1.25rem;
}
/*商品上架左箭头大小*/

/deep/ i.van-icon.van-icon-arrow-left.van-nav-bar__arrow {
  font-size: 1.5rem;
}

/deep/ .van-cell__title.van-field__label {
  width: 12.95rem;
}
/*商品上架字体大小*/

/deep/ .van-nav-bar__title.van-ellipsis {
  font-size: 1.5rem;
}
/*单元格内容居中*/

/deep/ .van-cell__value.van-cell__value--alone {
  text-align: center;
}
/*layout 布局行与行的间距*/

.van-row.van-row--flex {
  margin: 1rem 0;
}
/*确定上架边框*/

/deep/ .van-button--round {
  border-radius: 0.3rem;
}

.van-cell {
  margin: 1rem;
}
/*去除边框*/

.van-cell.van-field {
  position: static;
}
</style>