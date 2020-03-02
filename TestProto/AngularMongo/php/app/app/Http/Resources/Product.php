<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
        /*return [
            'Id'= $this->Id, 
            'ProductName'= $this->ProductName,
            'ProductDescription' = $this->ProductDescription,
            'ProductPrice' = $this->ProductPrice
        ];*/
    }
}
