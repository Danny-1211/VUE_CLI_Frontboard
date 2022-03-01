<template>
 <div class="col-md-6" >
          <h2>單一產品細節</h2>
          <template v-if="product.id"> <!--用if判斷clickProduct有沒有文字-->
            <div class="card mb-3">
              <img v-bind:src="product.imageUrl" class="card-img-top primary-image" alt="主圖">
              <div class="card-body" >
                <h5 class="card-title">
                  {{product.title }}
                  <span class="badge bg-primary ms-2">{{ product.category  }}</span>
                </h5>
                <p class="card-text">商品描述：{{ product.description }}</p>
                <p class="card-text">商品內容：{{ product.content }}</p>
                <div class="d-flex">
                  <p class="card-text me-2">{{ product.origin_price }}</p>
                  <p class="card-text text-secondary"><del>{{ product.price }}</del></p>
                  {{ product.unit }} / 元
                </div>
                 <input class="btn btn-primary" type="button" value="加入購物車" @click="addCart(product.id)">
              </div>
            </div>
            <template v-for=" e in product.imagesUrl" :key="e">  <!--用foreach跑clickProduct的圖片陣列，再用v-bind綁定圖片-->
              <img v-bind:src="e" alt="" class="images m-2">
            </template>
          </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: []
    };
  },
  methods: {
    getProductInforMation () {
      const { id } = this.$route.params;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then(res => {
          // console.log(res.data);
          this.product = res.data.product;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addCart (id, quality = 1) {
      const data = {
        product_id: id,
        qty: quality
      };
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data: data })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.getProductInforMation();
  }
};
</script>
