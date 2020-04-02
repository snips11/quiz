<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class resetPassword extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'password:reset {user} {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset a users password';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        \App\User::find($this->argument('user'))->update([
            "password" => $this->argument('password')
        ]);
    }
}
