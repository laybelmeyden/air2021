<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompetetion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competetion', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('svg')->nullable();
            $table->string('modal_name')->nullable();
            $table->string('page')->nullable();
            $table->string('image')->nullable();
            $table->longtext('body')->nullable();
            $table->text('unbody')->nullable();
            $table->string('other2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('competetion');
    }
}
