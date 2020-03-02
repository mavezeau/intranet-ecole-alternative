<?php

use Illuminate\Http\Request;
Use App\Product;
 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource('product', 'api\ProductController');
/*Route::post('product/edit/{id}', 'api\ProductController@update');
Route::post('product/add', 'api\ProductController@store');*/
/*Route::post('product/add', function(Request $request) {
    return Product::store($request->all);
});*/
/*
Route::get('product', function(){
    return Product::all();
});

Route::post('product/add', function(Request $request){
    $product = $request->all();
    return Product::create([
        'ProductName' => $product['ProductName'],
        'ProductDescription' => $product['ProductDescription'],
        'ProductPrice' => $product['ProductPrice'],
    ]);
});


Route::get('product/edit/{Id}', function($Id){
    return Product::find($Id);
});
*/
/*Route::post('product/update/{Id}', function(Request $request,$Id){
    $product = Product::find($Id);
    $product->update($request->all());


    return $product;
});*/

/*
Route::post('product/update/{Id}', 'api\ProductController@update');
Route::get('product/delete/{Id}', function($Id){
    Product::destroy($Id);
    return 204;
});


*/
Route::get('product', 'api\ProductController@index');
Route::get('product/edit/{product}', 'api\ProductController@show');
Route::post('product/add', 'api\ProductController@store');
Route::post('product/update/{product}', 'api\ProductController@update');
Route::delete('product/{product}', 'api\ProductController@delete');