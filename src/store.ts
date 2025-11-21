import { create } from 'zustand';

interface Store {
  balance: number;
  items: Record<string, number>;
  buyItem: (itemId: string, price: number) => void;
  sellItem: (itemId: string, price: number) => void;
}

const initialItemsKeys = [
  'rolex', 'ford', 'tesla', 'monster_truck', 'ferrari',
  'private_jet', 'helicopters', 'yachts', 'mansions',
  'acres_of_land', 'apartments', 'cruise_ship', 'donation_to_charity',
  'macbook_laptops', 'iphone_17', 'samsung_s23', 'years_of_netflix',
  'years_of_spotify', 'years_of_hulu', 'years_of_youtube_premium', 'single_family_home',
  'formula_1_car', 'horses', 'bulls', 'cows', 'supermarkets', 'diamond_ring',
  'high_end_restaurants', 'high_end_resort_centers', 'luxury_wine',
  'gold_bar', 'make_a_movie', 'years_of_vacation'
];

// Initialize all items with zero quantity
const initialItemsRecord: Record<string,number> = {};
initialItemsKeys.forEach(k => { initialItemsRecord[k] = 0 });

const useStore = create<Store>((set) => ({
  balance: 456_000_000_000,
  items: initialItemsRecord,
  buyItem: (itemId, price) =>
    set((state: Store) => {  // <-- add explicit type for state
      if (state.balance >= price) {
        return {
          balance: state.balance - price,
          items: {
            ...state.items,
            [itemId]: state.items[itemId] + 1,
          }
        };
      }
      return state;
    }),
  sellItem: (itemId, price) =>
    set((state: Store) => {  // <-- add explicit type here too
      if (state.items[itemId] > 0) {
        return {
          balance: state.balance + price,
          items: {
            ...state.items,
            [itemId]: state.items[itemId] - 1,
          }
        };
      }
      return state;
    })
}));

export default useStore;