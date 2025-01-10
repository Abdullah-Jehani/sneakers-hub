<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-400">
    <div class="w-full max-w-md bg-white p-8 py-16 rounded-lg shadow-md">
      <h2 class="text-3xl font-bold text-gray-700 text-center">Login</h2>
      <form @submit.prevent="handleLogin" class="mt-6">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="authStore.email"
            required
            class="mt-1 block w-full px-4 py-3 border rounded-md text-gray-700 focus:ring focus:ring-transparent focus:outline-none"
          />
        </div>
        <div class="mb-12">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="authStore.password"
            required
            class="mt-1 block w-full px-4 py-3 border rounded-md text-gray-700 focus:ring focus:ring-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          class="w-full font-bold text-lg bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-blue-600 hover:underline"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/counter";
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with", {
    email: email.value,
    password: password.value,
  });
};
onMounted(() => {
  authStore.email = "";
  authStore.password = "";
});
</script>
