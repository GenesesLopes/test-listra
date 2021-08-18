<?php

namespace Database\Factories;

use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

class VehicleFactory extends Factory
{

    /** @var array */
    const CARS = [
        'Fiat Strada',
        'Fiat Argo',
        'Hyundai HB20',
        'Fiat Mobi',
        'Jeep Renegade',
        'Renault Kwid',
        'Jeep Compass',
        'Fiat Toro',
        'Hyundai Creta',
        'Fiat Cronos',
        'VW Gol',
        'Toyota Corolla Cross',
        'Toyota Corolla',
        'Toyota Hilux',
        'Chevrolet S10',
        'VW T-Cross',
        'Nissan Kicks',
        'VW Saveiro',
        'VW Nivus',
        'Fiat Uno',
        'Hyundai HB20S',
        'Chevrolet Onix',
        'Honda HR-V',
        'Renault Duster',
        'Citroën C4 Cactus',
        'Toyota Yaris Hatch',
        'Chevrolet Spin',
        'VW Virtus',
        'Honda Civic',
        'Fiat Fiorino'
    ];

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Vehicle::class;

    /**
     * Get a new Faker instance.
     *
     * @return \Faker\Generator
     */
    public function withFaker()
    {
        return \Faker\Factory::create('pt_BR');
    }

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            'description' => self::CARS[array_rand(self::CARS)] .' '. $this->faker->colorName(),
            'price' => $this->faker->randomFloat(2,max: 1000000)
        ];
    }
}
