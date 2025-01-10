<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-400">
    <div class="w-full max-w-md bg-white p-8 py-16 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-700 text-center">Sign Up</h2>
      <form @submit.prevent="handleSignup" class="mt-6">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="authStore.name"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="authStore.email"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="authStore.password"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          class="w-full font-bold text-lg bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/counter";

const authStore = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");

const handleSignup = () => {
  console.log("Signing up with", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
};
</script>
