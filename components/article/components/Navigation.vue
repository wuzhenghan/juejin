<template>
    <div class="navigation-container">
        <div class="navigation-container-top">
            目录
        </div>
        <div class="navigation-container-middle">
            <ul class="navigation-container-middle-ul">
                <li class="navigation-container-middle-ul-li">
                    <div class="navigation-container-middle-ul-li-container">
                        <p class="navigation-container-middle-ul-li-container-p">正确的这是第一个导航</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
    .navigation-container{
        background-color: #fff;
        box-sizing: border-box;
        width: 300px;
        .navigation-container-top{
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
        .navigation-container-middle{
            margin-top: 8px;
            .navigation-container-middle-ul{
                line-height: 22px;
                padding-left: 0px;
                .navigation-container-middle-ul-li{
                    font-weight: 400;
                    color: #000;
                    font-size: 14px;
                    .navigation-container-middle-ul-li-container{
                        padding-left: 11px;
                        cursor: pointer;
                        .navigation-container-middle-ul-li-container-p{
                            padding: 8px;
                            margin: 0px;
                            color: inherit;
                            width: 90%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        &:hover .navigation-container-middle-ul-li-container-p{
                            background-color: #f7f8fa;
                            border-radius: 4px;
                            color: #007fff;
                        }
                    }
                }
            }
        }
    }
</style>