<template>
<h2>購物車列表</h2>
    <div class="text-end">
        <button class="btn btn-outline-danger" type="button" @click="deleteAllCartData">清空購物車</button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="carts.carts">
                <tr v-for="item in carts.carts" :key="item.id">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteSingleCart(item)">
                      <i class="fas fa-spinner fa-pulse"></i>
                      x
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                              <!--如果 購物車數量更改的話就觸發更新購物車資料 update-->
                             <select name="" id="form-select" v-model="item.qty" @change="updateCartData(item)">
                               <option :value="num" v-for="num in 20" :key="`${num}+123`">{{num}}</option>
                             </select>
                        <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small class="text-success">價格：</small>
                    {{item.total}}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{carts.total }}</td>
              </tr>
              <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ carts.final_total }}</td>
              </tr>
            </tfoot>
          </table>
</template>

<script>
export default {
  data () {
    return {
      carts: []
    };
  },
  methods: {
    getCartData () { // 取得購物車資料
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteAllCartData () { // 清空購物車
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then(res => {
          this.getCartData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateCartData (item) { // 更新購物車的時候把整筆資料帶入
      const data = {
        product_id: item.id,
        qty: item.qty
      };
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data: data })
        .then(res => {
          this.getCartData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteSingleCart (item) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          this.getCartData();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.getCartData();
  }
};
</script>
