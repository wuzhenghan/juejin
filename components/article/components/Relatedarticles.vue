<template>
    <div class="related-container">
        <div class="related-container-top">
            相关文章
        </div>
        <div class="related-container-middle">
            <ArticleComponentsRelatedcard></ArticleComponentsRelatedcard>
        </div>
    </div>
</template>
<style lang="less">
    .related-container{
        background-color: #fff;
        box-sizing: border-box;
        width: 300px;
        margin-bottom: 20px;
        .related-container-top{
            height: 57px;
            box-sizing: border-box;
            font-size: 16px;
            line-height: 24px;
            color: #1d2129;
            font-weight: 500;
            border-bottom: 1px solid #e4e6eb;
            margin: 0 20px;
            padding: 16px 0;
        }
        .related-container-middle{
            padding: 8px 0 16px;
        }
    }
</style>