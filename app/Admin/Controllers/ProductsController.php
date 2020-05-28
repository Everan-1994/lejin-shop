<?php

namespace App\Admin\Controllers;

use App\Models\Product;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Controllers\AdminController;
use Illuminate\Support\Facades\Log;

class ProductsController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Product(), function (Grid $grid) {
            $grid->id->sortable();
            $grid->column('title', '商品名称');
            $grid->on_sale('已上架')->display(function ($value) {
                return $value ? '是' : '否';
            });
            $grid->price('价格');
            $grid->rating('评分');
            $grid->sold_count('销量');
            $grid->review_count('评论数');

            $grid->actions(function ($actions) {
                $actions->disableView();
                $actions->disableDelete();
            });
            $grid->tools(function ($tools) {
                // 禁用批量删除按钮
                $tools->batch(function ($batch) {
                    $batch->disableDelete();
                });
            });

            $grid->filter(function (Grid\Filter $filter) {
                $filter->equal('id');

            });
        });
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     *
     * @return Show
     */
    protected function detail($id)
    {
        return Show::make($id, new Product(), function (Show $show) {
            $show->id;
            $show->created_at;
            $show->updated_at;
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Form::make(new Product(), function (Form $form) {
            $form->display('id');

            // 创建一个输入框，第一个参数 title 是模型的字段名，第二个参数是该字段描述
            $form->text('title', '商品名称')->rules('required');

            // 创建一个选择图片的框
            $form->image('image', '封面图片')->rules('required|image');

            // 创建一个富文本编辑器
            $form->editor('description', '商品描述')->rules('required');

            // 创建一组单选框
            $form->radio('on_sale', '上架')->options(['1' => '是', '0' => '否'])->default('0');

            // 直接添加一对多的关联模型
            $form->hasMany('skus', 'SKU 列表', function (Form\NestedForm $form) {
                $form->text('title', 'SKU 名称')->rules('required');
                $form->text('description', 'SKU 描述')->rules('required');
                $form->text('price', '单价')->rules('required|numeric|min:0.01');
                $form->text('stock', '剩余库存')->rules('required|integer|min:0');
            });

            // 定义事件回调，当模型即将保存时会触发这个回调
            $form->saving(function (Form $form) {
                $form->price = collect($form->input('skus'))->where(Form::REMOVE_FLAG_NAME, 0)->min('price') ?: 0;
            });
        });
    }

}
