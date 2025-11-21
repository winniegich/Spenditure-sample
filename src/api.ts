export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  return [
    // Rolex, Ford, Tesla
    {
      id: 'rolex',
      name: 'Rolex',
      price: 15000,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ford',
      name: 'Ford F 150',
      price: 30000,
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'tesla',
      name: 'Tesla',
      price: 75000,
      imageUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
    },

    // Monster Truck, Ferrari, Private Jet, Helicopters, Yachts, Mansions
    {
      id: 'monster_truck',
      name: 'Monster Truck',
      price: 150000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Monster_Truck_1.jpg',
    },
    {
      id: 'ferrari',
      name: 'Ferrari',
      price: 250000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Ferrari_458_Italia_on_the_street.jpg',
    },
    {
      id: 'private_jet',
      name: 'Private Jet',
      price: 20000000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PT-BWB_Private_jet.jpg',
    },
    {
      id: 'helicopters',
      name: 'Helicopters',
      price: 31000000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Helicopter_in_flight.jpg',
    },
    {
      id: 'yachts',
      name: 'Yachts',
      price: 7500000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/50_meter_motor_yacht_IMG_8112.jpg',
    },
    {
      id: 'mansions',
      name: 'Mansions',
      price: 45000000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Mansion_house_in_Germany.jpg',
    },

    // Acres Of Land, Apartments, Cruise Ship, Donation To Charity, MacBook Laptops, iPhone 17
    {
      id: 'acres_of_land',
      name: 'Acres Of Land',
      price: 10000,
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'apartments',
      name: 'Apartments',
      price: 200000,
      imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cruise_ship',
      name: 'Cruise Ship',
      price: 930000000,
      imageUrl: 'https://images.unsplash.com/photo-1502920514311-57bda6ec37b7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'donation_to_charity',
      name: 'Donation To Charity',
      price: 1000000,
      imageUrl: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'macbook_laptops',
      name: 'MacBook Laptops',
      price: 2000,
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'iphone_17',
      name: 'iPhone 17',
      price: 3000,
      imageUrl: 'https://images.unsplash.com/photo-1533444702928-7056823f4d99?auto=format&fit=crop&w=800&q=80',
    },

    // Samsung S23, Years Of Netflix, Spotify, Hulu, YouTube Premium, Single Family Home
    {
      id: 'samsung_s23',
      name: 'Samsung S23',
      price: 2500,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'years_of_netflix',
      name: 'Years Of Netflix',
      price: 250,
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'years_of_spotify',
      name: 'Years Of Spotify',
      price: 200,
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'years_of_hulu',
      name: 'Years Of Hulu',
      price: 300,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hulu_Logo.svg',
    },
    {
      id: 'years_of_youtube_premium',
      name: 'Years Of YouTube Premium',
      price: 300,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
    },
    {
      id: 'single_family_home',
      name: 'Single Family Home',
      price: 300000,
      imageUrl: 'https://images.unsplash.com/photo-1501183638714-887fe51b2a9f?auto=format&fit=crop&w=800&q=80',
    },

    // Formula 1 Car, Horses, Bulls, Cows, Supermarkets, Diamond Ring
    {
      id: 'formula_1_car',
      name: 'Formula 1 Car',
      price: 15000000,
      imageUrl: 'https://images.unsplash.com/photo-1439189985595-3a9f89c13336?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'horses',
      name: 'Horses',
      price: 2500,
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'bulls',
      name: 'Bulls',
      price: 2800,
      imageUrl: 'https://images.unsplash.com/photo-1574169208507-84376174822d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cows',
      name: 'Cows',
      price: 3000,
      imageUrl: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'supermarkets',
      name: 'Supermarkets',
      price: 20000000,
      imageUrl: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'diamond_ring',
      name: 'Diamond Ring',
      price: 10000,
      imageUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
    },

    // High End Restaurants, High End Resort Centers, Luxury Wine, Gold Bar, Make A Movie, Years Of Vacation
    {
      id: 'high_end_restaurants',
      name: 'High End Restaurants',
      price: 1_000_000,
      imageUrl: 'https://images.unsplash.com/photo-1555992336-aa9d3f61a899?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'high_end_resort_centers',
      name: 'High End Resort Centers',
      price: 1_000_000,
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'luxury_wine',
      name: 'Luxury Wine',
      price: 7_000,
      imageUrl: 'https://images.unsplash.com/photo-1571047375359-7e93bbb3c31d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gold_bar',
      name: 'Gold Bar',
      price: 700_000,
      imageUrl: 'https://images.unsplash.com/photo-1557306749-bc3e8200f654?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'make_a_movie',
      name: 'Make A Movie',
      price: 50_000_000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Keanu_Reeves_in_Bill_%26_Ted%27s_Excellent_Adventure_2010.png',
    },
    {
      id: 'years_of_vacation',
      name: 'Years Of Vacation',
      price: 10_000_000,
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
    },
  ];
};