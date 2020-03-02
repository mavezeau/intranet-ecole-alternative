<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product as ProductResource;
use Illuminate\Http\Request;
use App\Product;
class ProductController extends Controller
{
    
    public function index()
    {
        //
      /*  return response()->json([
            'name' => 'Abigail',
            'state' => 'CA'
        ]);*/
       // return new ProductResource(Product::all());
        return Product::all();
    }


    public function store(Request $request)
    {
        //
       /* $product = new Product();
        $product->ProductName = $request->ProductName;
        $product->ProductDescription = $request->ProductDescription;
        $product->ProductPrice = $request->ProductPrice;
        $product->save();
        
        return new ProductResource($product);*/
    /*    $product = Product::save();
       return response()->json($product, 201);*/

       $product = Product::create($request->all());

        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        //
        //return new ProductResource(Product::FindOrFail($Id));
        return $product;
    }
   
    public function update(Request $request, Product $product)
    {
        //
       /* $product = Product::findOrFail($id);
        $product->ProductName = $request->ProductName;
        $product->ProductDescription = $request->ProductDescription;
        $product->ProductPrice = $request->ProductPrice;
        $product->save();
        
        return new ProductResource($product);*/

        $product->update($request->all());

        return response()->json($product, 200);

    }

    public function destroy(Product $product)
    {
        //
 /*       $product = Product::findOrFail($Id);
        $product->delete();
        
        return new ProductResource($product);*/
        $product->delete();

        return response()->json(null, 204);
    }
}
