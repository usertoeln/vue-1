<template>
    <div class="col-md-8 offset-2 mt-3">
        <form class="form-horizontal">
            <fieldset class="wraper">

                <!-- Form Name -->
                <legend>وبلاگ - افزودن نوشته</legend>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="firstName">عنوان:</label>
                    <div class="col-md-4">
                        <input type="text"
                               v-model="post.title"
                               placeholder="عنوان را وارد کنید"
                               class="form-control input-md">
                    </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for=" lastName">محتوای نوشته:</label>
                    <div class="col-md-4">
                        <textarea rows="8" type="text"
                                  v-model="post.content"
                                  placeholder="محتوا را وارد کنید"
                                  class="form-control input-md"></textarea>
                    </div>
                </div>

                <!-- Multiple Checkboxes (inline) -->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="checkboxes">موضوع : </label>
                    <div class="col-md-4">
                        <label class="checkbox-inline" for="checkboxes-0">
                            <input type="checkbox" value=" وب برنامه نویسی" v-model="post.categories">
                            وب برنامه نویسی
                        </label>
                        <label class="checkbox-inline" for="checkboxes-1">
                            <input type="checkbox" value="طراحی وب" v-model="post.categories">
                            طراحی وب
                        </label>
                        <label class="checkbox-inline" for="checkboxes-2">
                            <input type="checkbox" value="معماری وب" v-model="post.categories">
                            معماری وب
                        </label>
                        <label class="checkbox-inline" for="checkboxes-3">
                            <input type="checkbox" value="مدیریت سرور" v-model="post.categories">
                            مدیریت سرور
                        </label>
                        <label class="checkbox-inline" for="checkboxes-3">
                            <input type="checkbox" value="مارکتینگ" v-model="post.categories">
                            مارکتینگ
                        </label>
                        <label class="checkbox-inline" for="checkboxes-3">
                            <input type="checkbox" value="سئو" v-model="post.categories">
                            سئو
                        </label>
                    </div>
                </div>

                <!-- Select Basic -->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="selectbasic">نویسنده</label>
                    <div class="col-md-4">
                        <select id="selectbasic" name="selectbasic" class="form-control" v-model="post.author">
                            <option v-for="(author,index) in authers" :key="index">{{ author }}</option>
                        </select>
                    </div>
                </div>

                <!-- preview section -->
                <div class="form-group preview">
                    <div class="col-md-12">
                        <h3>پیش نمایش نوشته</h3>
                        <hr>
                        <div class="row  ">
                            <div class="col-md-2 bold">
                                <p>عنوان: </p>
                            </div>
                            <div class="col-md-10">
                                <p>{{ post.title }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 bold">
                                <p>محتوای نوشته: </p>
                            </div>
                            <div class="col-md-10">
                                <p>{{ post.content }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 bold">
                                <p>موضوع : </p>
                            </div>
                            <div class="col-md-10">
                                <ul>
                                    <li v-for="(category,index) in post.categories" :key="index">{{ category }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2 bold">
                                <p>نویسنده : </p>
                            </div>
                            <div class="col-md-10">
                                <p>{{ post.author }}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Button -->
                <div class="form-group">
                    <div class="col-md-4">
                        <button id="singlebutton" name="singlebutton" class="btn btn-primary">ارسال درخواست</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: "blog",
        data() {
            return {
                post: {
                    title: null,
                    content: null,
                    categories: [],
                    author: null,
                    post_datetime: null,
                },
                authers: ['علیرضا', 'پریسا', 'ملیکا']
            }
        }
    }
</script>

<style scoped>
    .wraper {
        padding       : 5px;
        background    : #fafafa;
        border        : 1px solid #dddddd;
        border-radius : 5px;
        font-family   : iransans;
    }

    legend {
        background    : #fafafa;
        padding       : 5px;
        border-radius : 5px;
        border        : 1px solid #eeeeee;
    }

    .preview {
        background    : #fefefe;
        margin        : 5px !important;
        border        : 1px solid #eeeeee;
        border-radius : 5px;
    }

    .preview p {
        padding : 15px
    }

    .bold p {
        font-weight : 800;
    }

</style>