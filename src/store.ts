import { create } from "zustand";

interface Store {
  balance: number;
  items: Record<string, number>;
  buyItem: (itemId: string, price: number) => void;
  sellItem: (itemId: string, price: number) => void;
  clearItems: () => void;
}

const initialItemsKeys = [
  'rolex', 'ford', 'tesla', 'monster_truck', 'ferrari',
  'private_jet', 'helicopter', 'yacht', 'mansion',
  'land', 'apartments', 'cruise_ship', 'donation',
  'macbook', 'iphone_17', 'samsung_s23', 'netflix',
  'spotify', 'youtube', 'single_family_home', 'formula_1_car',
  'horses', 'bulls', 'cows', 'supermarkets', 'diamond_ring',
  'high_end_restaurants', 'high_end_resort_centers',
  'luxury_wine', 'gold_bar', 'make_a_movie', 'years_of_vacation'
];

const initialItemsRecord: Record<string, number> = {};
initialItemsKeys.forEach(k => initialItemsRecord[k] = 0);

const useStore = create<Store>(set => ({
  balance: 456_000_000_000,
  items: initialItemsRecord,
  buyItem: (itemId, price) =>
    set(state => {
      if (state.balance >= price) {
        return {
          balance: state.balance - price,
          items: { ...state.items, [itemId]: state.items[itemId] + 1 }
        };
      }
      return state;
    }),
  sellItem: (itemId, price) =>
    set(state => {
      if (state.items[itemId] > 0) {
        return {
          balance: state.balance + price,
          items: { ...state.items, [itemId]: state.items[itemId] - 1 }
        };
      }
      return state;
    }),
  clearItems: () => set(state => ({
    balance: state.balance,
    items: initialItemsRecord
  }))
}));

export default useStore;
