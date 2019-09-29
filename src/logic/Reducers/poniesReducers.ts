import IPony from "../Interfaces/IPony";

const initialState: IPony[] = [
  {
    ponyName: "Twilight Sparkle",
    ponySprite: "twilight-sparkle.png"
  },
  {
    ponyName: "Pinkie Pie",
    ponySprite: "pinkie-pie.png"
  },
  {
    ponySprite: "Rainbow-Dash.png",
    ponyName: "Rainbow Dash"
  }
];
const poniesReducer = (state: IPony[] = initialState, action: any): IPony[] => {
  switch (action.type) {
    default:
      return state;
  }
};

export default poniesReducer;
