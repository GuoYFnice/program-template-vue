<template>
  <div :class="$style.container">
    <el-table
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
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pageSizes: {
        type: Array,
        default () {
          return [10, 20, 30, 40, 50];
        }
      },
      /**
       * 如果外部传递data优先用响应式table data
       * pageList就可以不用传递
       */
      data: {
        type: Array,
        default: null
      },
      /**
       * 表格列定义函数
       * column options
       * {string} label
       * {string} align
       * {string} prop
       * {function} formatter
       * {string} width px单位宽度, 注意不带px
       * {string} minWidth px单位宽度, 注意不带px
       * {boolean} hidden
       * {string} slot 自定义列插槽name
       * {string} header 自定义列表头插槽name
       * {function} renderHeader 自定义列表头渲染函数
       */
      columns: {
        type: Function,
        default: null
      },
      /**
       * 表格数据获取函数
       */
      pageList: {
        type: Function,
        default: null
      },
      rowKey: {
        type: Function,
        default: null
      },
      border: {
        type: Boolean,
        default: true
      },
      /**
       * 是否提供行选择复选框
       */
      withSelection: {
        type: Boolean,
        default: false
      },
      withIndex: {
        type: Boolean,
        default: false
      },
      /**
       * index表头名称，默认为序号
       */
      indexName: {
        type: String,
        default: "序号"
      },
      /**
       * 默认下单页时不显示分页组件
       */
      withPagination: {
        type: Boolean,
        default: true
      },
      /**
       * 是否自动调用pageList加载分页数据
       * 默认true
       */
      autoLoad: {
        type: Boolean,
        default: true
      },
      highlightCurrentRow: {
        type: Boolean,
        default: false
      },
      cellStyle: {
        type: Function
      },
      pagerCount: {
        type: Number,
        default: 7
      },
      "row-click": {
        type: Function,
        default: null
      },
      "current-change": {
        type: Function,
        default: null
      },
      "header-click": {
        type: Function,
        default: null
      },
      showOverflowTooltip: {
        type: Boolean,
        default () {
          return true;
        }
      }
    },
    name: "Table",
    data () {
      return {
        mCurrentPage: this.currentPage,
        mPageSize: this.pageSize,
        total: 0,
        mPageSizes: this.pageSizes,
        tableData: [],
        loading: false
      };
    },
    beforeCreate () {
      this._selectedData = [];
      this._currentRow = null;
    },
    mounted () {
      // 如果外部传递了table data数据源
      // 优先以外部响应式数据更新table data
      if (!this.data && this.autoLoad) {
        pageList.call(this);
      }
    },
    computed: {
      mData () {
        return this.data || this.tableData;
      },
      mColumns () {
        // 修复v-if和v-for共用lint错误
        // The 'mColumns' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array
        // instead. You should not mix 'v-for' with 'v-if'  vue/no-use-v-if-with-v-for
        return this.columns()
          // hidden属性控制列显示隐藏
          .filter(column => !column.hidden);
      }
    },
    methods: {
      handlePageChg (currentPage) {
        return pageChg.call(this, currentPage, this.mPageSize);
      },

      handleSizeChg (pageSize) {
        return pageChg.call(this, this.mCurrentPage, pageSize);
      },

      handleSelectionChg (selectedData) {
        this._selectedData = selectedData;
        this.$emit("check-list", selectedData);
      },

      handleCurrentChange (currentRow, oldRow) {
        this.$emit("current-change", currentRow, oldRow);
      },

      handleRowClk (row, column, event) {
        // row click事件晚于current-change事件
        if (this._currentRow === row) {
          // toggle select
          this.$refs.table.setCurrentRow(null);
          this._currentRow = null;
        } else {
          this._currentRow = row;
        }

        this.$emit("row-click", row, column, event);
      },

      handleHeaderClick (column, event) {
        this.$emit("header-click", column, event);
      },

      // 对外API
      // ===================================

      /**
       * 外部组件通过ref主动更新table data
       */
      pageLists () {
        return pageList.apply(this, arguments);
      },

      /**
       * 获取选中行数据
       * @returns {array<*>}
       */
      selectedData () {
        return this._selectedData;
      },

      clearSelection () {
        this.$refs.table.clearSelection();
        this._selectedData = [];
        return this;
      },

      getData () {
        return this.mData;
      }
    }
  };

  function pageChg (currentPage, pageSize) {
    this.mCurrentPage = currentPage;
    this.mPageSize = pageSize;
    pageList.call(this);
    return this;
  }

  async function pageList () {
    let result = {};

    try {
      this.loading = true;
      result = await this.pageList({
        // 后端统一为page名字
        page: this.mCurrentPage,
        pageSize: this.mPageSize
        // 传递额外参数到外部pageList方法
      }, ...arguments) || {};
    } finally {
      this.loading = false;
    }

    const {
      tableData,
      page,
      pageSize,
      total
    } = result;

    if (tableData !== undefined) {
      this.tableData = tableData;
    }
    if (page !== undefined) {
      this.mCurrentPage = page;
    }
    if (pageSize !== undefined) {
      this.mPageSize = pageSize;
    }
    if (total !== undefined) {
      this.total = total;
    }
  }

</script>

<style lang="scss" module src="./style.scss"/>
