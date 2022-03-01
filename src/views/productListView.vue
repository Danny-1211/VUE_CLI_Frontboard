<template>
<h2>產品列表</h2>
<div class="container">
    <div class="row row-cols-1 row-cols-lg-4 g-3"> <!--row決定內層的數量 row-cols-4 決定每一列都4個-->
    <!--row-cols-1是行動版每列1個 row-cols-lg-4 是桌面板每次4個 -->
      <!--內層不定義寬度-->
      <div class="col" v-for=" item in products" :key="item.id">
        <div class="card h-100" style="width: 18rem;" >
            <img :src="item.imageUrl" class="card-img-top" alt="" width=200 height=300>
            <div class="card-body" >
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item['description']}}</p>
              <router-link :to="`/productInfor/${item.id}`" class="btn btn-primary">詳細資訊</router-link>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    };
  },
  methods: {
    getProductData () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then(res => {
          this.products = res.data.products;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.getProductData();
  }
};
</script>
