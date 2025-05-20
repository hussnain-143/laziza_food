<script>
// ================= JS IMPORTS =================

// Vendor JS
// import '@/assets/vendors/js/vendor.bundle.base.js'
// import '@/assets/vendors/chart.js/Chart.min.js'
// import '@/assets/vendors/progressbar.js/progressbar.min.js'
// import '@/assets/vendors/jvectormap/jquery-jvectormap.min.js'
// import '@/assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js'
// import '@/assets/vendors/owl-carousel-2/owl.carousel.min.js'

// Custom scripts
// import '@/assets/js/off-canvas.js'
// import '@/assets/js/hoverable-collapse.js'
// import '@/assets/js/misc.js'
// import '@/assets/js/settings.js'
// import '@/assets/js/todolist.js'
// import '@/assets/js/dashboard.js'

import Layout from './components/Layout/admin/Layout.vue';

import Header from './components/main/admin/Header.vue';
import Sidebar from './components/main/admin/Sidebar.vue';
import Footer from './components/main/admin/Footer.vue';

export default {
  components: {
    Layout,
    Header,
    Sidebar,
    Footer,
  }
}
</script>

<template>
  <div class="container-scroller">
    <Sidebar />
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <Header />
      <!-- partial -->
      <div class="main-panel">
        <Layout />

        <Footer />
      </div>
    </div>
  </div>
</template>
