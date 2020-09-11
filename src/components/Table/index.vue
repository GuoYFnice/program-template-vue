<template>
  <div :class="$style.container">
    <!-- <el-table
      ref="table"
      v-loading="loading"
      :data="mData"
      :row-key="rowKey"
      :border="border"
      :highlight-current-row="highlightCurrentRow"
      :cell-style="cellStyle"
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChg"
      @row-click="handleRowClk"
      @header-click="handleHeaderClick">
      <el-table-column
        v-if="withSelection"
        type="selection"
        width="50"/>
      <el-table-column
        type="index"
        :label="indexName"
        v-if="withIndex">
        <template #default="scope">
          {{ common.indexMethod(scope.$index, mCurrentPage, mPageSize) }}
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="showOverflowTooltip"
        v-for="column in mColumns"
        :key="column.label"
        :align="column.align"
        :prop="column.prop"
        :formatter="column.formatter"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :render-header="column.renderHeader">
        <template
          v-if="column.header"
          #header>
          <slot
            :name="column.header"
            :column="column"/>
        </template>
        <template
          v-if="column.slot"
          #default="{row}">
          <slot
            :row="row"
            :name="column.slot"/>
        </template>
      </el-table-column>
      <slot name="actions"/>
    </el-table>
    <div
      v-if="withPagination"
      :class="$style.paginationBox">
      <el-pagination
        @current-change="handlePageChg"
        @size-change="handleSizeChg"
        :current-page="mCurrentPage"
        :page-sizes="mPageSizes"
        :page-size="mPageSize"
        :total="total"
        :pager-count="pagerCount"
        layout="total, sizes, prev, pager, next, jumper"/>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class Table extends Vue {
//   @Prop(Number) private currentPage!: 1;
//   @Prop(Number) private pageSize!: 10;
//   @Prop(Array) private pageSizes!: [10, 20, 30, 40, 50];
// /**
//  * 如果外部传递data优先用响应式table data
//  * pageList就可以不用传递
//  */
//   @Prop(Array) private data!: null;
//   @Prop(Function) private columns!: null;
//   @Prop(Function) private pageList!: null;
//   @Prop(Function) private rowKey!: null;
//   @Prop(Boolean) private border!: true;
//       /**
//        * 是否提供行选择复选框
//        */
//   @Prop(Boolean) private withSelection!: false;
//   @Prop(Boolean) private withIndex!: false;
//   @Prop(String) private indexName!: "序号";
//   @Prop(Boolean) private withPagination!: true;
//   /**
//    * 是否自动调用pageList加载分页数据
//    * 默认true
//    */
//   @Prop(Boolean) private autoLoad!: true;
//   @Prop(Boolean) private highlightCurrentRow!: false;
//   @Prop(Function) private cellStyle!: null;
//   @Prop(Number) private pagerCount!: 7;
//   @Prop(Function) private rowClick!: null;
//   @Prop(Function) private currentChange!: null;
//   @Prop(Function) private headerClick!: null;
//   @Prop(Boolean) private showOverflowTooltip!: true;

//   mCurrentPage:number = this.currentPage
//   mPageSize :number = this.pageSize
//   total:number = 0
//   mPageSizes:Array<number> = this.pageSizes
//   tableData:Array<any>= []
//   _selectedData:Array<number> = []
//   _currentRow:any= null
//   loading:boolean=false
  // private mounted(): void {
  //   // 如果外部传递了table data数据源
  //   // 优先以外部响应式数据更新table data
  //   if (!this.data && this.autoLoad) {
  //     this.pageList.call(this);
  //   }
  // }
  // private beforeCreate(): void {
  //   this._selectedData = [];
  //   this._currentRow = null;
  // }
  // private handlePageChg (currentPage:Array<number>): function  {
  //   return this.pageChg.call(this, currentPage, this.mPageSize);
  // }
  // private handleSizeChg (pageSize:number) {
  //   return this.pageChg.call(this, this.mCurrentPage, pageSize);
  // }
  // private handleSelectionChg (selectedData:Array<number>): void  {
  //   this._selectedData = selectedData;
  //   this.$emit("check-list", selectedData);
  // }
  // private handleCurrentChange (currentRow:object, oldRow:object): void  {
  //   this.$emit("current-change", currentRow, oldRow);
  // }
  // private handleRowClk (row:object, column:object, event:void): void  {
  //   // row click事件晚于current-change事件
  //   if (this._currentRow === row) {
  //     // toggle select
  //     this.$refs.table.setCurrentRow(null);
  //     this._currentRow = null;
  //   } else {
  //     this._currentRow = row;
  //   }

  //   this.$emit("row-click", row, column, event);
  // }
  // private handleHeaderClick (column:object, event:void): void  {
  //   this.$emit("header-click", column, event);
  // }

  // // 对外API
  // // ===================================

  // /**
  //  * 外部组件通过ref主动更新table data
  //  */
  // pageLists () {
  //   return this.pageList.apply(this, arguments);
  // }

  // /**
  //  * 获取选中行数据
  //  * @returns {array<*>}
  //  */
  // selectedData () {
  //   return this._selectedData;
  // }

  // clearSelection () {
  //   this.$refs.table.clearSelection();
  //   this._selectedData = [];
  //   return this;
  // }

  // getData () {
  //   return this.mData;
  // }
  // private pageChg (currentPage:number, pageSize:number): Array<any>  {
  //   this.mCurrentPage = currentPage;
  //   this.mPageSize = pageSize;
  //   pageList.call(this);
  //   return this;
  // }

  // async function pageList () {
  //   let result = {};

  //   try {
  //     this.loading = true;
  //     result = await this.pageList({
  //       // 后端统一为page名字
  //       page: this.mCurrentPage,
  //       pageSize: this.mPageSize
  //       // 传递额外参数到外部pageList方法
  //     }, ...arguments) || {};
  //   } finally {
  //     this.loading = false;
  //   }

  //   const {
  //     tableData,
  //     page,
  //     pageSize,
  //     total
  //   } = result;

  //   if (tableData !== undefined) {
  //     this.tableData = tableData;
  //   }
  //   if (page !== undefined) {
  //     this.mCurrentPage = page;
  //   }
  //   if (pageSize !== undefined) {
  //     this.mPageSize = pageSize;
  //   }
  //   if (total !== undefined) {
  //     this.total = total;
  //   }
  // }
}
</script>

<style lang="scss" module src="./style.scss"/>