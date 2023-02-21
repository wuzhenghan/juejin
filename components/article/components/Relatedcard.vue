<template>
    <div class="card-container">
        <div class="card-container-title">
            async/await 优雅的错误处理方法
        </div>
        <div class="card-container-bottom">
            <span class="card-container-bottom-span1">296点赞</span>
            <span class="card-container-bottom-span1"> · </span>
            <span class="card-container-bottom-span1">2,873评论</span>
        </div>
    </div>
</template>
<style lang="less">
    .card-container{
        box-sizing: border-box;
        width: 300px;
        padding: 8px 20px;
        cursor: pointer;
        color: #909090;
        .card-container-title{
            line-height: 22px;
            font-size: 14px;
            font-weight: 400;
            color: #252933;
        }
        &:hover .card-container-title{
            color: #007fff;
        }
        .card-container-bottom{
            margin-top: 4px;
            width: 100%;
            .card-container-bottom-span1{
                font-size: 14px;
                line-height: 22px;
                color: #8a919f;
                font-weight: 400;
            }
        }
    }
</style>