<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'p_nombre' => $this->faker->firstName(),
            's_nombre' => $this->faker->firstName(),
            'p_apellido' => $this->faker->lastName(),
            's_apellido' => $this->faker->lastName(),
            't_identificacion' => $this->faker->numberBetween(1,4),
            'identificacion' => $this->faker->numberBetween(10000000,1000000000),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('12345678'), // password
            // 'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
