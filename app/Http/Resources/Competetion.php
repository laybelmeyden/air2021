<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Competetion extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'svg' => $this->svg,
            'modal_name' => $this->modal_name,
            'page' => $this->page,
            'image' => $this->image,
            'body' => $this->body,
            'unbody' => $this->unbody,
            'other2' => $this->other2,
        ];
    }
}
