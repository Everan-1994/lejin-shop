<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    protected $fillable = [
        'title', 'description', 'image', 'on_sale',
        'rating', 'sold_count', 'review_count', 'price'
    ];

    // protected $casts = [
    //     'on_sale' => 'boolean', // on_sale 是一个布尔类型的字段
    // ];

    const ON_SALE_0 = 0; // 下架
    const ON_SALE_1 = 1; // 上架

    public static $onSales = [
        self::ON_SALE_0 => '否',
        self::ON_SALE_1 => '是'
    ];

    // 与商品SKU关联
    public function skus()
    {
        return $this->hasMany(ProductSku::class);
    }

    public function getImageAttribute()
    {
        // 如果 image 字段本身就已经是完整的 url 就直接返回
        if (Str::startsWith($this->attributes['image'], ['http://', 'https://'])) {
            return $this->attributes['image'];
        }

        return \Storage::disk('admin')->url($this->attributes['image']);
    }
}
