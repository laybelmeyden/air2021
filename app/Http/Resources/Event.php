<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Event extends JsonResource
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
            'body' => $this->body,
            'image' => $this->image,
            'date' => $this->date,
            'page' => $this->page,
            'time' => $this->time,
            'href_event' => $this->href_event,
            'minibody' => $this->minibody,
            'zayavka' => $this->zayavka,
            'formaregi' => $this->formaregi,
            'seo_title' => $this->seo_title,
            'seo_description' => $this->seo_description,
            'seo_keywords' => $this->seo_keywords,
            'preimg' => $this->preimg,
            'status' => $this->status,
            'actually' => $this->actually,
        ];
    }
}
