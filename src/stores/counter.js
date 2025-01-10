import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    name: localStorage.getItem("name") || "",
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "",
  }),
  getters: {
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
    setAuthenticated: (state) => state.isAuthenticated,
    getToken: (state) => state.token,
    getRole: (state) => state.role,
    getName: (state) => state.name,
  },
  actions: {
    async login() {
      const apiUrl = import.meta.env.VITE_APP_API_URL;
      try {
        const response = await axios.post(apiUrl + "login", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          this.token = response.data.token;
          this.isAuthenticated = true;
          this.fname = response.data.user.fname;
          this.lname = response.data.user.lname;
          this.role = response.data.user.role;
          localStorage.setItem("token", this.token);
          localStorage.setItem("email", this.email);
          localStorage.setItem("password", this.password);
          localStorage.setItem("role", this.role);
          localStorage.setItem("isAuthenticated", true);

          if (this.role === "user") {
            router.push("/");
          } else if (this.role === "admin") {
            router.push("/admin");
          } else if (this.role === "stock_manager") {
            router.push("/orders");
          }
          setAuthenticated(true);
        } else {
          window.alert("فشل تسجيل الدخول");
        }
      } catch (error) {
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
        if (error.response && error.response.status === 401) {
          window.alert("البريد الالكتروني او كلمة المرور غير صحيحة");
          this.email = "";
          this.password = "";
        }
      }
    },
    async register() {
      const apiUrl = import.meta.env.VITE_APP_API_URL;
      try {
        const response = await axios.post(apiUrl + "register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.isAuthenticated = true;
        this.role = "user";
        if (this.isAuthenticated) {
          window.alert("تم التسجيل بنجاح");
          router.push("/");
        }
      } catch (error) {
        alert("فشل التسجيل");
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      }
    },

    async logout() {
      const apiUrl = import.meta.env.VITE_APP_API_URL;

      try {
        if (!this.token) {
          throw new Error("No token found");
        }

        const response = await axios.post(
          apiUrl + "logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        if (response.status === 200) {
          window.alert("تم تسجيل الخروج بنجاح");
        } else {
          window.alert(" تسجيل الخروج");
        }
      } catch (error) {
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
        window.alert(" تسجيل الخروج");
      } finally {
        // Clear all session data and redirect
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("role");
        this.token = "";
        this.role = "";
        this.email = "";
        this.password = "";
        this.isAuthenticated = false;

        // Redirect to login page
        router.push("/login");
      }
    },
  },
  persist: {
    enabled: true,
  },
});
