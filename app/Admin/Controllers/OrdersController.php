<?php

namespace App\Admin\Controllers;

use App\Models\Order;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Controllers\AdminController;

class OrdersController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(Order::with(['user']), function (Grid $grid) {
            // 只展示已支付的订单，并且默认按支付时间倒序排序
            $grid->model()->whereNotNull('paid_at')->orderBy('paid_at', 'desc');

            $grid->no('订单号');
            $grid->column('user.name', '买家');
            $grid->total_amount('总金额')->sortable();
            $grid->paid_at('支付时间')->sortable();
            $grid->ship_status('物流')->display(function($value) {
                return Order::$shipStatusMap[$value];
            });
            $grid->refund_status('退款状态')->display(function($value) {
                return Order::$refundStatusMap[$value];
            });
            // 禁用创建按钮，后台不需要创建订单
            $grid->disableCreateButton();
            $grid->actions(function ($actions) {
                // 禁用删除和编辑按钮
                $actions->disableDelete();
                $actions->disableEdit();
            });
            $grid->tools(function ($tools) {
                // 禁用批量删除按钮
                $tools->batch(function ($batch) {
                    $batch->disableDelete();
                });
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
        return Show::make($id, new Order(), function (Show $show) {
            $show->id;
            $show->no;
            $show->user_id;
            $show->address;
            $show->total_amount;
            $show->remark;
            $show->paid_at;
            $show->payment_method;
            $show->payment_no;
            $show->refund_status;
            $show->refund_no;
            $show->closed;
            $show->reviewed;
            $show->ship_status;
            $show->ship_data;
            $show->extra;
            $show->created_at;
            $show->updated_at;
        });
    }
}
