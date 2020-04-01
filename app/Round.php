<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Round extends Model
{

    protected $guarded = [];
    
    public function questions()
    {
        return $this->hasMany('App\Question');
    }
}
