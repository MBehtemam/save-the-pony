import IPony from "../Interfaces/IPony";

const initialState: IPony[] = [
  {
    ponyName: "Ginger Gold",
    ponySprite: "Ginger_Gold.png"
  },
  {
    ponySprite: "Twinkleshine.png",
    ponyName: "Twilight Sparkle"
  }
];
const poniesReducer = (state: IPony[] = initialState, action: any): IPony[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export default poniesReducer;
