<template>
  <main style="width: 100%; padding: 0 24px">
    <div class="table-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="breed" label="Breed" width="180" />
        <el-table-column prop="birth_day" label="Birth day" width="180" />
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="breed"
              @keyup="handleInput"
              type="text"
              placeholder="Input breed"
              size="small"
              class="search-field"
            />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleDetail(scope.row)"
              >Details</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="dogs.length"
        :page-size="itemsPerPage"
        @current-change="handlePageChange"
      />
    </div>
  </main>
</template>

<script>
import { storeToRefs } from "pinia";
import {
  ElTable,
  ElTableColumn,
  ElInput,
  ElButton,
  ElPagination,
} from "element-plus";
import { useDogsStore } from "@/stores/dogs";

export default {
  data() {
    return {
      breed: "",
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  setup() {
    const store = useDogsStore();
    const { dogs } = storeToRefs(store);
    const { filter } = store;

    return { dogs, filter };
  },
  computed: {
    tableData() {
      if (!this.dogs || this.dogs.length === 0) return [];
      return this.dogs?.slice(
        this.itemsPerPage * this.currentPage - this.itemsPerPage,
        this.itemsPerPage * this.currentPage
      );
    },
  },
  methods: {
    handleDetail(row) {
      this.$router.push(`dog/${row.id}`);
    },
    handleInput(e) {
      this.filter(e.target.value);
    },
    handlePageChange(val) {
      this.currentPage = val;
    },
  },
  components: {
    ElTable,
    ElTableColumn,
    ElInput,
    ElButton,
    ElPagination,
  },
};
</script>

<style scoped>
.table-container {
  margin-bottom: 24px;
}
.pagination {
  display: flex;
  justify-content: center;
}
.search-field {
  width: 180px;
}
</style>
