<template>
  <div class="wrapper">
    <h1 class="title">
      <el-button
        class="back-btn"
        circle
        @click="handleBack"
        :icon="ArrowLeft"
      />
      {{ data.name }}
    </h1>
    <div class="item">
      <div class="image">
        <el-avatar shape="square" :size="300" :src="data.img" />
      </div>
      <div>
        <h4 class="label">Breed - {{ data.breed }}</h4>
        <h4 class="label">Birth day - {{ data.birth_day }}</h4>
        <h4 class="label">Registration date - {{ data.registration_date }}</h4>
      </div>
    </div>
    <div v-if="auth && authUser.role === 'admin'">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in data.timeline"
          :key="index"
          :timestamp="item.date"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useDogsStore } from "../stores/dogs";
import { useAuthStore } from "../stores/auth";
import { ElAvatar, ElButton, ElTimeline, ElTimelineItem } from "element-plus";
import { ArrowLeft } from "@element-plus/icons-vue";
import router from "../router";
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useDogsStore();
const authStore = useAuthStore();
const id = route.params.id;
const data = store.getDogById(Number(id));
const { auth, authUser } = storeToRefs(authStore);

const handleBack = () => {
  router.go(-1);
};
</script>

<style scoped>
.wrapper {
  padding: 0 24px;
}

.title {
  margin-bottom: 24px;
}
.item {
  display: flex;
  margin-bottom: 16px;
}
.image {
  margin-right: 24px;
}
.label {
  font-weight: bold;
}
.back-btn {
  margin-right: 8px;
}
</style>
