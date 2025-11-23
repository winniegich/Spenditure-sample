// src/api/index.ts

// Import all images
import rolexImg from "../assets/images/rolex_watch.jpg";
import fordImg from "../assets/images/ford.jpg";
import teslaImg from "../assets/images/tesla.jpg";
import monsterTruckImg from "../assets/images/monster_truck.jpg";
import ferrariImg from "../assets/images/ferrari.jpg";
import privateJetImg from "../assets/images/private_jet.jpg";
import helicopterImg from "../assets/images/helicopter.jpg";
import yachtImg from "../assets/images/yacht.jpg";
import mansionImg from "../assets/images/mansion.jpg";
import landImg from "../assets/images/land.jpg";
import apartmentsImg from "../assets/images/apartments.jpg";
import cruiseShipImg from "../assets/images/cruise_ship.jpg";
import donationImg from "../assets/images/donation.jpg";
import macbookImg from "../assets/images/mac_book.jpg";
import iphoneImg from "../assets/images/iphone_17.jpg";
import samsungImg from "../assets/images/samsung_s23.jpg";
import netflixImg from "../assets/images/netflix.jpg";
import spotifyImg from "../assets/images/spotify.jpg";
import youtubeImg from "../assets/images/youtube.jpg";
import formula1CarImg from "../assets/images/formula_1_car.jpg";
import bullImg from "../assets/images/bull.jpg";
import cowsImg from "../assets/images/cows.jpg";
import horseImg from "../assets/images/horse.jpg";
import highEndResortImg from "../assets/images/high-end_resort.jpg";
import highEndRestaurantImg from "../assets/images/restaurant.jpg";
import goldBarImg from "../assets/images/gold_bar.jpg";
import makeMovieImg from "../assets/images/make_a_movie.jpg";
import luxuryWineImg from "../assets/images/luxury_wine.jpg";
import supermarketsImg from "../assets/images/supermarkets.jpg";
import diamondringImg from "../assets/images/diamond_ring.jpg";
import vacationImg from "../assets/images/vacation.jpg";

// Product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

// Fetch products
export const fetchProducts = async (): Promise<Product[]> => [
  { id: "rolex", name: "Rolex", price: 15000, imageUrl: rolexImg },
  { id: "ford", name: "Ford F 150", price: 30000, imageUrl: fordImg },
  { id: "tesla", name: "Tesla", price: 75000, imageUrl: teslaImg },
  { id: "monster_truck", name: "Monster Truck", price: 150000, imageUrl: monsterTruckImg },
  { id: "ferrari", name: "Ferrari", price: 250000, imageUrl: ferrariImg },
  { id: "private_jet", name: "Private Jet", price: 20000000, imageUrl: privateJetImg },
  { id: "helicopter", name: "Helicopter", price: 31000000, imageUrl: helicopterImg },
  { id: "yacht", name: "Yacht", price: 7500000, imageUrl: yachtImg },
  { id: "mansion", name: "Mansion", price: 45000000, imageUrl: mansionImg },
  { id: "land", name: "Land", price: 10000, imageUrl: landImg },
  { id: "apartments", name: "Apartments", price: 200000, imageUrl: apartmentsImg },
  { id: "cruise_ship", name: "Cruise Ship", price: 930000000, imageUrl: cruiseShipImg },
  { id: "donation", name: "Donation", price: 1000000, imageUrl: donationImg },
  { id: "macbook", name: "MacBook", price: 2000, imageUrl: macbookImg },
  { id: "iphone_17", name: "iPhone 17", price: 3000, imageUrl: iphoneImg },
  { id: "samsung_s23", name: "Samsung S23", price: 2500, imageUrl: samsungImg },
  { id: "netflix", name: "Netflix", price: 250, imageUrl: netflixImg },
  { id: "spotify", name: "Spotify", price: 200, imageUrl: spotifyImg },
  { id: "youtube", name: "YouTube Premium", price: 300, imageUrl: youtubeImg },
  { id: "single_family_home", name: "Single Family Home", price: 350000, imageUrl: mansionImg },
  { id: "formula_1_car", name: "Formula 1 Car", price: 12000000, imageUrl: formula1CarImg },
  { id: "horses", name: "Horses", price: 50000, imageUrl: horseImg },
  { id: "bulls", name: "Bull", price: 8000, imageUrl: bullImg },
  { id: "cows", name: "Cows", price: 1500, imageUrl: cowsImg },
  { id: "supermarkets", name: "Supermarkets", price: 5000000, imageUrl: supermarketsImg },
  { id: "diamond_ring", name: "Diamond Ring", price: 20000, imageUrl: diamondringImg },
  { id: "high_end_restaurants", name: "High End Restaurants", price: 1000000, imageUrl: highEndRestaurantImg },
  { id: "high_end_resort_centers", name: "High End Resort Centers", price: 5000000, imageUrl: highEndResortImg },
  { id: "luxury_wine", name: "Luxury Wine", price: 500, imageUrl: luxuryWineImg },
  { id: "gold_bar", name: "Gold Bar", price: 60000, imageUrl: goldBarImg },
  { id: "make_a_movie", name: "Make a Movie", price: 100000000, imageUrl: makeMovieImg },
  { id: "years_of_vacation", name: "Years of Vacation", price: 20000, imageUrl: vacationImg },
];
