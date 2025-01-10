<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2
        class="text-4xl font-semibold text-center tracking-tight text-gray-900 sm:text-5xl"
      >
        Special Shoes With Offers
      </h2>
      <p class="my-8 mb-20 max-w-3xl mx-auto text-center text-xl text-gray-600">
        The attitude of kindness is everyday stuff like a great pair of
        sneakers. Not frilly. Not fancy. Just plain and comfortable.
      </p>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <!-- Sale Banner -->
          <div v-if="product.onSale" class="absolute top-4 right-4 z-10">
            <div
              class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              SALE
            </div>
          </div>

          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="aspect-square w-full p-12 rounded-md bg-gray-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="`/sneakers/${product.id}`">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.brand }}</p>
              <p class="mt-1 text-xs text-gray-500">{{ product.color }}</p>
            </div>
            <div class="text-right">
              <p
                v-if="product.onSale"
                class="text-xs text-gray-500 line-through"
              >
                {{ product.originalPrice }}
              </p>
              <p
                class="text-sm font-medium"
                :class="product.onSale ? 'text-red-600' : 'text-gray-900'"
              >
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

async function fetchProducts() {
  const response = await axios.get("https://fakestoreapi.com/products", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log(response.data);
}
onMounted(() => {
  fetchProducts();
});
const products = [
  {
    id: 1,
    name: "TRAVIS SCOTT AJ1 FOR MEN",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-72.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$150",
    originalPrice: "$200",
    color: "White/University Red",
    onSale: true,
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-5.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: true,
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-6.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: false,
  },
  {
    id: 7,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-7.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: false,
  },
  {
    id: 8,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-8.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: false,
  },
  {
    id: 9,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-4.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: false,
  },
  {
    id: 10,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-72.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: true,
  },
  {
    id: 11,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/New-Balnce-1.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: false,
  },
  {
    id: 12,
    name: "Nike Air Max 270",
    brand: "Nike",
    imageSrc: "src/assets/images/shoe-2.png",
    imageAlt: "Nike Air Max 270 sneakers in white and red",
    price: "$120",
    originalPrice: "$150",
    color: "White/University Red",
    onSale: false,
  },
];
</script>
