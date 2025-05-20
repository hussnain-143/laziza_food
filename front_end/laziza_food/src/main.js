import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// ================= CSS IMPORTS =================
// Vendor CSS
import '@/assets/vendors/css/vendor.bundle.base.css'
import '@/assets/vendors/mdi/css/materialdesignicons.min.css'

// Plugin CSS
import '@/assets/vendors/jvectormap/jquery-jvectormap.css'
import '@/assets/vendors/flag-icon-css/css/flag-icon.min.css'
import '@/assets/vendors/owl-carousel-2/owl.carousel.min.css'
import '@/assets/vendors/owl-carousel-2/owl.theme.default.min.css'

// Main CSS
import '@/assets/css/style.css'
