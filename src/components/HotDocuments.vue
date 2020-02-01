<template>
    <div>
        <el-table :data="hotDocData" stripe style="width: 100%">
            <el-table-column prop="docName" label="文档名称" width="175" show-overflow-tooltip>
                <template slot-scope="scope">
                    <router-link :to='{path: "/docDetailsPage", query: {lang: lang}}' class="docNameCls" target="_blank">
                        <span> {{ scope.row.docName }}</span>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="docOwner" label="文档作者" width="175">
            </el-table-column>
            <el-table-column prop="scanDate" label="浏览日期" width="175"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hotDocData: []
        }
    },
    mounted() {
        const hotDoc_url = 'static/hotDocTableData.json';
        this.$ajax.get(hotDoc_url).then(res => {
            let resData = res.data.data;
            this.hotDocData = resData;
        });
    }
}
</script>

<style>
.docNameCls {
    text-decoration: none;
    color:cornflowerblue
}


</style>

